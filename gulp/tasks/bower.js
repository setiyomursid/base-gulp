var gulp = require('gulp'),
    config = require('../config').bower,

    bowerFiles = require('main-bower-files'),
    plumber = require('gulp-plumber'),
    filter = require('gulp-filter'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    changed = require('gulp-changed'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');

gulp.task('bower-js', function() {
  return gulp.src(bowerFiles())
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); this.emit('end') }
    }))
    .pipe(filter('**/*.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest_js))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bower-css', function() {
  return gulp.src(bowerFiles())
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); this.emit('end') }
    }))
    .pipe(filter('**/*.css'))
    .pipe(changed(config.dest_css))
    .pipe(minifyCSS({keepSpecialComments: 0 }))
    .pipe(rename({
      prefix: '_',
      extname: '.scss'
    }))
    .pipe(gulp.dest(config.dest_css))
    .pipe(browserSync.reload({stream:true}));
});
gulp.task('bower-scss', function() {
  return gulp.src(bowerFiles())
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); this.emit('end') }
    }))
    .pipe(filter('**/*.scss'))
    .pipe(changed(config.dest_css))
    .pipe(gulp.dest(config.dest_css))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('bower', ['bower-js', 'bower-css', 'bower-scss']);