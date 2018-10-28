'use strict';

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('./source/sass/app.scss')
        .pipe($.gp.sourcemaps.init())   //можно читать в dev tools, укажет номер строки
        .pipe($.gp.sassGlob())        //в app.sass млжно будет указать путь к импорту файлов со * звездочкой
        .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
        .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))  //ставит префиксы аля moz fv итд
        .pipe($.gp.cssUnit({ type: 'px-to-rem', rootSize: 16 }))    //px переводит в rem
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest($.config.root + '/assets/css'))
        .pipe($.browserSync.stream());
    });
};
  