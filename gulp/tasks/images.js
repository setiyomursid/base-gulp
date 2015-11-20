// Copy images to build

var gulp = require('gulp'),
    config = require('../config').images,
    sampleData = require('../config').sampleData,

    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync');

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); this.emit('end') }
    }))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});