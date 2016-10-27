var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    protractor = require('gulp-protractor').protractor,
    view=require('./test/profile/view.js'),
    capabilities=require('./test/profile/capabilities.js'),
    util = require('gulp-util');
    var exec = require('child-process-promise').exec;

    gulp.task('cmd',function(){
    var promises=[];
    var f1 = function(browser,view,tag){
        process.env.BROWSER=browser;
        process.env.VIEW=view;
        process.env.TAGS=tag;
        return exec('gulp protractor')
            .then(function (results) {
                console.log(results.stdout);
            })
            .catch(function (err) {
                console.error('ERROR: ',err.stdout);
            });
    };
    promises.push(f1(util.env.browser,util.env.view,util.env.tag));

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
    switch(process.env.VIEW){
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
    console.log(process.env.TAGS);
    return gulp.src(["./src/test/*.js"])
    .pipe(protractor({
        configFile: "config.js"
    }))
    .on('error', function(e) { throw e });
});