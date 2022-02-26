const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('node-sass'))


function tarefasCSS(cb) {
    gulp.src([
            './src/css/*css',
            './node_modules/bootstrap/dist/css/bootstrap.css'
        ])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
    cb()
}

function tarefasSASS(cb) {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
    cb()
}

const process = series(tarefasCSS, tarefasSASS)


exports.styles = tarefasCSS
exports.stylesSass = tarefasSASS

exports.default = process