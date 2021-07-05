import { App } from '@aws-cdk/core';
import { Builder } from '@sls-next/lambda-at-edge';
import { NextStack } from './stack';

const builder = new Builder('.', './build', { args: ['build'] });

const contextEnv = (process.env.CDK_CONTEXT_ENV || 'staging').toUpperCase();

builder
  .build(true)
  .then(() => {
    const app = new App();
    new NextStack(app, `${contextEnv}PersonalSiteStack`, {
      analyticsReporting: false,
      description: `Personal site written in Nextjs (${contextEnv})`,
      env: {
        region: 'us-east-1',
      },
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
