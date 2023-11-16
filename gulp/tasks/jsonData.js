const { src, dest } = require('gulp');
const browserSync = require('browser-sync');

const { paths } = require('../config');

const jsonData = () => {
  return (
    src(paths.jsonData.src)
      .pipe(dest(paths.jsonData.dist))
      .pipe(browserSync.stream())
  )
}

module.exports = jsonData;
