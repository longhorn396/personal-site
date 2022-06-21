/* eslint-disable no-undef */
module.exports = {
  // target: 'serverless',
  webpack: (config) => {
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });
    return config;
  },
};
