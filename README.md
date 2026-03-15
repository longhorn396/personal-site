# Devin Drawhorn's Personal Site

## Tools Used

| Purpose | Tool |
| --- | --- |
| Infrastructure as Code | [SST](https://sst.dev/) / [Pulumi](https://www.pulumi.com/) |
| React Framework | [Next.js](https://nextjs.org/) |
| Testing Framework | [Jest](https://jestjs.io/) |
| UI Components | [Material-UI](https://material-ui.com/) |

## Architecture

For this project I am using the [SST Nextjs component](https://sst.dev/docs/component/aws/nextjs/#assets). The concept is to split the traditional webserver into several Lambda@Edge functions behind a CloudFront distribution. This approach has been cheaper than others that I have tried (most of my costs for this have been $0.50 per month for Route53), though it is more complicated to understand and modify.

## CI/CD

CI is handled by [Husky](https://typicode.github.io/husky/#/) git hooks that run my unit tests before pushing my changes to GitHub. Code is linted before commits and tested before pushes.

CD is done by AWS Code Pipelines.
