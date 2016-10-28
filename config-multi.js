exports.config={
    getPageTimeout: 10000,
    allScriptsTimeout: 10000,
  
   multiCapabilities: [
  {'browserName': process.env.BROWSER,
   chromeOptions : {
            args: [process.env.VIEW]
        },
  specs:['test/features/first.feature']
  }, 
  {'browserName':'firefox',
   
  specs:['test/features/second.feature']
  }],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts:{
  
      require:[
        'test/features/step_definitions/*.js'
      ],
      format:'pretty'
    },


  onPrepare:function(){
    var chai=require('chai');
      chaiAsPromised=require('chai-as-promised');
      expect=chai.expect;
      chai.use(chaiAsPromised);
}
};