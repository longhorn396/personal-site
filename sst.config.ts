// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(_input) {
    return {
      name: 'portfolio',
      home: 'aws',
    }
  },
  async run() {
    const recipeTable = new sst.aws.Dynamo('RecipeTable', {
      fields: {
        recipeName: 'string',
        cook: 'string',
        lunch: 'string',
      },
      primaryIndex: { hashKey: 'recipeName' },
    })
    new sst.aws.Nextjs('Portfolio', {
      domain: $app.stage === 'production' ? 'drawhorn.com' : 'drawhorn.click',
      link: [recipeTable],
    })
  },
})
