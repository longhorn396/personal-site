# Devin Drawhorn's Personal Site

## Tools Used

| Purpose | Tool |
|---|---|
| Infrastructure as Code | [AWS CDK](https://aws.amazon.com/cdk/) |
| React Framework | [Next.js](https://nextjs.org/) |
| Testing Framework | [Jest](https://jestjs.io/) |
| UI Components | [Material-UI](https://material-ui.com/) |

## Architecture

For this project I am using the [CDK Construct](https://serverless-nextjs.com/docs/cdkconstruct) created by [Serverless-Nextjs](https://serverless-nextjs.com/). The below architecture diagram is from their documentation.

![Architecture Diagram](https://serverless-nextjs.com/assets/images/arch_no_grid-93318e17a6f016cf25b71df5119af630.svg)

The concept is to split the traditional webserver into several Lambda@Edge functions behind a CloudFront distribution. This approach has been cheaper than others that I have tried (most of my costs for this have been $0.50 per month for Route53), though it is more complicated to understand and modify.

## CI/CD

CI is handled by [Husky](https://typicode.github.io/husky/#/) git hooks that run my unit tests before pushing my changes to GitHub.

CD is done by AWS Code Pipelines.
