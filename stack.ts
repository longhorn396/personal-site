import { Certificate } from '@aws-cdk/aws-certificatemanager';
import { Runtime } from '@aws-cdk/aws-lambda';
import { HostedZone } from '@aws-cdk/aws-route53';
import { Construct, Duration, Stack, StackProps } from '@aws-cdk/core';
import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import { ACM } from 'aws-sdk';
import { CertificateSummaryList } from 'aws-sdk/clients/acm';

const acm = new ACM({ region: 'us-east-1' });
let acmCerts: CertificateSummaryList | undefined = [];
acm.listCertificates({ CertificateStatuses: ['ISSUED'] }, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    acmCerts = data.CertificateSummaryList;
  }
});

export class NextStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    const envs = this.node.tryGetContext('ENVIRONMENTS');
    const contextEnv = process.env.CDK_CONTEXT_ENV || 'staging';
    const env = envs[contextEnv];
    let acmArn = '';
    acmCerts &&
      acmCerts.forEach((certSummary) => {
        if (certSummary.DomainName === env.domainName) {
          acmArn = certSummary.CertificateArn || '';
          return;
        }
      });
    if (acmArn === '') {
      console.error('ACM Certificate not found');
      process.exit(1);
    }
    new NextJSLambdaEdge(this, `${contextEnv.toUpperCase()}PersonalSiteApp`, {
      serverlessBuildOutDir: './build',
      domain: {
        domainNames: [env.domainName],
        hostedZone: HostedZone.fromHostedZoneAttributes(this, 'Zone', {
          hostedZoneId: env.hostedZoneId,
          zoneName: env.hostedZoneName,
        }),
        certificate: Certificate.fromCertificateArn(this, 'Cert', acmArn),
      },
      runtime: Runtime.NODEJS_12_X,
      memory: 1024,
      timeout: Duration.seconds(30),
      withLogging: false,
    });
  }
}
