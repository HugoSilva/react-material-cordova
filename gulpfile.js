var gulp = require('gulp');
var create = require('gulp-cordova-create');
var plugin = require('gulp-cordova-plugin');
var android = require('gulp-cordova-build-android');

gulp.task('build', () => {
    return gulp.src('dist')
        .pipe(create())
        .pipe(plugin('org.apache.cordova.dialogs'))
        .pipe(plugin('org.apache.cordova.camera'))
        .pipe(android())
        .pipe(gulp.dest('apk'));
});