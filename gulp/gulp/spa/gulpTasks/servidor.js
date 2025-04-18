const gulp = require('gulp')
const webserver = require ('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js ', () => gulp.series('appHTML')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMGa')())

    
    return cb()
}

function servidor() {

    return gulp.src('bulid')
    .pipe(webserver({
        port : 8080,
        open : true,
        livereload : true, 
    }))
}

module.exports = {
    monitorarArquivos,
    servidor
}