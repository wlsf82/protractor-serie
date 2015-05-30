// conf.others.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [ 'spec.others.js' ],

  baseUrl: 'http://qualidadedesoftware.com.br',

  capabilities: {
    'browserName': 'chrome'
  }

  // multiCapabilities: [{
  //   'browserName': 'chrome'
  // }, {
  //   'browserName': 'firefox'
  // }]
}
