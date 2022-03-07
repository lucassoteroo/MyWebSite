const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('node-sass'))


function tarefasCSS(cb) {
    gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css'
        ])
        .pipe(concat('bootstrap.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./src/css'))
    cb()
}

function tarefasSASS(cb) {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
    cb()
}

const process = series(tarefasSASS, tarefasCSS)


exports.styles = tarefasCSS
exports.stylesSass = tarefasSASS

exports.default = process