'use strict';

module.exports = function() {
  $.gulp.task('copy:images', function() {
    return $.gulp.src('./source/images/**/*.*', { since: $.gulp.lastRun('copy:images') })
      .pipe($.gulp.dest($.config.root + '/assets/images'));
  });
};