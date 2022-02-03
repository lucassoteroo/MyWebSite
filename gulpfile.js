const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

function tarefasCSS() {
    return gulp.src([
            './css/*css',
            './node_modules/bootstrap/dist/css/bootstrap.css'
        ])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
}

exports.styles = tarefasCSS