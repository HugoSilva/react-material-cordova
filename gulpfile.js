var gulp = require('gulp');
var phonegapBuild = require('gulp-phonegap-build');

var apiToken = REPLACE_APITOKEN;

if (!apiToken) {
    throw new Error('Please set the PHONEGAP_API_TOKEN environment variable');
}

var contents = [
    'www/**/*',
    'config.xml'
];

gulp.task('build', () => {
    gulp.src(contents, {base: '.'})
        .pipe(phonegapBuild({
          "appId": REPLACE_APPID,
          "user": {
            "token": apiToken
          }
        }));
});