var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.sass.src, ['css']);
  gulp.watch(config.script.src, ['js']);
  gulp.watch(config.jade.src, ['html']);
  gulp.watch(config.images.src, ['images']);
});

gulp.task('default', ['watch']);