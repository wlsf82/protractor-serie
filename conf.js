// conf.js
exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
            'spec.js',
            'spec.experiment.js'
         ],

  jasmineNodeOpts: {

    defaultTimeoutInterval: 999999

  }
}
