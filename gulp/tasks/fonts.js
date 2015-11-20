// Copy fonts to build

var gulp = require('gulp'),
    config = require('../config').fonts,

    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync');

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); this.emit('end') }
    }))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});