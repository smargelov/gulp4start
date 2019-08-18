module.exports = function () {
    $.gulp.task('sass:build', () => {
        return $.gulp.src('./dev/static/sass/main.sass')
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.mmq())
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/static/css/'))
    });

    $.gulp.task('sass:dev', () => {
        return $.gulp.src('./dev/static/sass/main.sass')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'sass',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};