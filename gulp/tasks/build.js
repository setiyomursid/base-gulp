build.js
11:31:29 AM
// Build task

var gulp = require('gulp'),
    runSequence = require('run-sequence');

// Clean build directory
gulp.task('build', function(callback) {
  runSequence(
    'clean',
    ['bower', 'js', 'images'],
    'cssmin',
    'html',
    'clean-partials',
    callback
  );
});