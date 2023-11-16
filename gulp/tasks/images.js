const { src, dest } = require('gulp');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const browserSync = require('browser-sync');

const { paths, isProduction } = require('../config');

const images = () => {
  return (
    src(paths.images.src)
      .pipe(imagemin([imageminMozjpeg({
        quality: 75
      })]))
      .pipe(dest(paths.images.dist))
      .pipe(browserSync.stream())
  )
}

module.exports = images;
