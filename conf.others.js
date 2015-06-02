// conf.others.js

var cloudTestingHelper = require('./helpers/cloud.testing.helper');

exports.config = {

  // seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

  specs: [ 'spec.others.js' ],

  baseUrl: 'http://qualidadedesoftware.com.br',

  capabilities: {

    'browserName': 'chrome',

    // Saucelabs credentials
    username: cloudTestingHelper.getInfo('saucelabs', 'user'),
    accessKey: cloudTestingHelper.getInfo('saucelabs', 'key'),

    // Test suite name.
    'name': 'Protractor Serie'

  }
  
}
