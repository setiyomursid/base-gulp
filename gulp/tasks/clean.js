// Clean build directory

var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function(cb) {
  del(['./static/*', '!./static/.git', '!./static/.gitignore'], cb)
});

gulp.task('clean-partials', function(cb) {
  del([
    './static/components',
    './static/templates'
  ], cb)
});