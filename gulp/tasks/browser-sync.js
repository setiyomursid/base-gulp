// Web server

var gulp = require('gulp'),
    config = require('../config').browserSync,
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');

gulp.task('bundling', function(cb) {
  runSequence(
    'bower',
    ['css', 'js', 'images', 'fonts', 'copySample'],
    'html',
    cb
  );
});

gulp.task('browser-sync', ['bundling'], function() {
  browserSync.init(config);
});