var src = './src';
var dest = './build';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  sass: {
    src: src + '/sass/**/*.scss',
    dest: dest + '/css'
  },
  bower: {
    dest_js: dest + '/js',
    dest_css: src + '/sass/vendors'
  },
  script: {
    src: src + '/js/**/*.js',
    dest: dest + '/js'
  },
  jade: {
    src: src + '/**/*.jade',
    dest: dest
  },
  images: {
    src: src + '/img/**/*',
    dest: dest + '/img'
  },
  fonts: {
    src: src + '/fonts/**/*',
    dest: dest + '/fonts'
  }
}