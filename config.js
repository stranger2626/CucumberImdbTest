exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  getPageTimeout: 15000,

  setDefaultTimeout: 60000,

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // capabilities: {
  //   'browserName': 'chrome',
     // chromeOptions : {
     //        args: ['start-maximized','--disable-extensions']
     //    }
  //   },  

  // // Spec patterns are relative to this directory.
  // specs: [
  //   'features/*.feature'
  // ],
  multiCapabilities: [
  {'browserName': 'chrome',
   chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        },
  specs:['tests/features/first.feature']
  }, 
  {'browserName': 'chrome',
   chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        },
  specs:['tests/features/second.feature']

  }],

  cucumberOpts: {
    require: 'tests/features/step_definitions/stepDefinitions.js'
  },
  onPrepare : function() {
        var chai = require('chai');
            chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
}
};  