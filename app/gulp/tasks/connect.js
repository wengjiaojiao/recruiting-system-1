var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port: 8888,
    root: './public',
    livereload: true
  });
});
