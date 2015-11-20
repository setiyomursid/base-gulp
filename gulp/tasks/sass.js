// CSS task (compile SASS, autoprefixing, and combine media queries)

var gulp = require('gulp'),
    config = require('../config').sass,

    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    mqpacker = require('css-mqpacker'),
    browserSync = require('browser-sync'),
    minifyCSS = require('gulp-minify-css');

gulp.task('css', function() {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); this.emit('end') }
    }))
    .pipe(changed(config.dest, { extension: '.css' }))
    .pipe(sass({
      imagePath: '../img',
      sourceComments: true,
      outputStyle: 'expanded'
    }))
    .pipe(postcss([ autoprefixer, mqpacker ]))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('cssmin', function() {
  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: function(err) { console.log(err); this.emit('end') }
    }))
    .pipe(sass({
      imagePath: '../img',
      outputStyle: 'expanded'
    }))
    .pipe(postcss([ autoprefixer, mqpacker ]))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.dest));
});