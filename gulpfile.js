'use strict';

global.$ = {
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};


$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'copy:images',
        'copy:fonts',
        'copy:js',
        'css:foundation',
        'js:foundation',
        'sprite:svg'
    ),
    $.gulp.parallel(
        'sass',
        'pug'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));