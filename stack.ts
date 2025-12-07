import { Stack, StackProps } from 'aws-cdk-lib'
import { HostedZone } from 'aws-cdk-lib/aws-route53'
import type { Construct } from 'constructs'
import { NextjsSite } from 'sst/constructs'

export class NextStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)
    const envs = this.node.tryGetContext('ENVIRONMENTS')
    const contextEnv = process.env.CDK_CONTEXT_ENV || 'staging'
    const env = envs[contextEnv]
    new NextjsSite(this, `${contextEnv.toUpperCase()}PersonalSiteApp`, {
      customDomain: {
        domainName: env.domainName,
        cdk: {
          hostedZone: HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
            hostedZoneId: env.hostedZoneId,
            zoneName: env.hostedZoneName,
          }),
        },
      },
      edge: true,
      path: './',
    })
  }
}
