// HTML task (compiling jade, prettify output)

var gulp = require('gulp'),
    config = require('../config').jade,

    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    jade = require('gulp-jade'),
    prettify = require('gulp-prettify'),
    browserSync = require('browser-sync');

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); this.emit('end') }
    }))
    .pipe(changed(config.dest, { extension: '.html' }))
    .pipe(jade())
    .pipe(prettify({
      indent_size: 2,
      unformatted: ['pre', 'code'],
      preserve_newlines: true,
      max_preserve_newlines: 5
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
CANCELFORWARD 2 DELETE 2
