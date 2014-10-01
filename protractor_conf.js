exports.config = {
  sauceUser: 'thetatauappteam',
  sauceKey: '1adf628f-619a-4027-bd95-694a6ab9ba18',

  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/**/*'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};