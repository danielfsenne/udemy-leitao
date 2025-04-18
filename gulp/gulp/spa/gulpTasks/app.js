const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
     return gulp.src('src/**/*.html')
     .pipe(htmlmin({collapseWhitespace : true}))
     .pipe(gulp.dest('build'))
}

function appCSS() {
     return gulp.src('gulp\css\src\sass\index.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(uglifycss({"ugliComments" : true}))
     .pipe(concat(app.min.css))
     .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
    .pipe(babel({presets : ['ENV']}))
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('buld/assetes/js'))
}

function appIMG() {
    return gulp.src('src/assets/img/**/*.*')
    .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appIMG', appIMG)
gulp.task('appJS', appJS)
gulp.task('appCSS', appCSS)



module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}