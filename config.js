exports.config={
    getPageTimeout: 10000,
    allScriptsTimeout: 10000,
     capabilities: {
      'browserName': process.env.BROWSER||'chrome',
       chromeOptions : {
                args: [process.env.VIEW||'--window-size=1280,800']
            }

     },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs:['test/features/*.feature'],
    cucumberOpts:{
      require:[
        'test/features/step_definitions/*.js'
      ],
            //tags:process.env.TAGS||['@important'],
      format:'pretty'
    },


  onPrepare:function(){
    var chai=require('chai');
      chaiAsPromised=require('chai-as-promised');
      expect=chai.expect;
      chai.use(chaiAsPromised);
}
};