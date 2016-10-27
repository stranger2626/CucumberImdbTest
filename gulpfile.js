var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    protractor = require('gulp-protractor').protractor,
    view=require('./test/profile/view'),
    capabilities=require('./test/profile/capabilities'),
    util = require('gulp-util');
    var exec = require('child-process-promise').exec;

    gulp.task('cmd',function(){
    var promises=[];
    var f1 = function(browser,view,feature){
        process.env.BROWSER=browser;
        process.env.VIEW=view;
        process.env.FEATURE=feature;
        return exec('gulp protractor')
            .then(function (results) {
                console.log(results.stdout);
            })
            .catch(function (err) {
                console.error('ERROR: ',err.stdout);
            });
    };
    promises.push(f1('chrome',view.tablet));
    promises.push(f1('chrome',view.mobile));

   return  Promise.all([promises]);
    

});
    
gulp.task('test', function(){
    runSequence(
        'cmd'       
    );
});

gulp.task('protractor', function(){
     var viewmodel;
    util.env.browser?process.env.BROWSER=util.env.browser:process.env.BROWSER;
    util.env.view?viewmodel=util.env.view:process.env.VIEW;
    switch(viewmodel){
             case "tablet":
                  process.env.VIEW=view.tablet;
             break;
             case "desktop":
                  process.env.VIEW=view.desktop;   
             break;
             case "mobile":
                  process.env.VIEW=view.mobile;    
             break;

    }
    console.log(process.env.BROWSER);
    console.log(process.env.VIEW);
    console.log(process.env.FEATURE);
    return gulp.src(["./src/test/*.js"])
    .pipe(protractor({
        configFile: "config.js"
    }))
    .on('error', function(e) { throw e });
});