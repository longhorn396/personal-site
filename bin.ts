import { App } from 'aws-cdk-lib'
import { NextStack } from './stack'

const contextEnv = (process.env.CDK_CONTEXT_ENV || 'staging').toUpperCase()

const app = new App()
new NextStack(app, `${contextEnv}PersonalSiteStack`, {
  analyticsReporting: false,
  description: `Personal site written in Nextjs (${contextEnv})`,
  env: {
    region: 'us-east-1',
  },
})
