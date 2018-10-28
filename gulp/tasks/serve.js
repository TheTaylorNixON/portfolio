'use strict';

module.exports = function () {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            open: false,
            notify: false,
            directory: true,
            // index: 'about.html',
            server: {
                baseDir: './public'
            }
        });
        $.browserSync.watch('./public/**/*.*', $.browserSync.reload);
    });
};