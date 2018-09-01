'use strict';

const gulp = require('gulp');
const browsersync = require('browser-sync').create();

gulp.task('serve', function () {
  browsersync.init({
    open: true,
    server: './'
  });
  // browsersync.watch('./', browsersync.reload);
});