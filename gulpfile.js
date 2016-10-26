var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    protractor = require('gulp-protractor').protractor;
    
gulp.task('test', function(){
    runSequence(
        'protractor'      
    );
});

gulp.task('protractor', function(){
    return gulp.src(["./src/tests/*.js"])
    .pipe(protractor({
        configFile: "config.js"
    }))
    .on('error', function(e) { throw e });
});