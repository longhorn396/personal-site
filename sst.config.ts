// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(_input) {
    return {
      name: 'personal-site',
      home: 'aws',
    }
  },
  async run() {
    new sst.aws.Nextjs('PersonalSite', {
      domain: 'drawhorn.click',
    })
  },
})
