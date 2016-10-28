exports.config={
    getPageTimeout: 10000,
    allScriptsTimeout: 10000,
  // capabilities: {
  //     'browserName': process.env.BROWSER,
  //      chromeOptions : {
  //               args:[process.env.VIEW]
  //           }

  //    },
   multiCapabilities: [
  {'browserName': process.env.BROWSER,
   chromeOptions : {
            args: [process.env.VIEW]
        },
  specs:['test/features/first.feature']
  }, 
  {'browserName': process.env.BROWSER,
   chromeOptions : {
             args: [process.env.VIEW]
             },
  specs:['test/features/second.feature']
  }],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //specs:['test/features/*.feature'],
    cucumberOpts:{
      //tags:process.env.TAGS,
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