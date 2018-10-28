'use strict';

module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./source/sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./source/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:images'));
        $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('copy:fonts'));
        $.gulp.watch('./source/js/**/*.*', $.gulp.series('copy:js'));
    });
};