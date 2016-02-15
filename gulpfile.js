
var gulp = require('gulp')
var coffee = require('gulp-coffee')
var uglify = require('gulp-uglify')
var sass = require('gulp-sass')
var minify = require('gulp-minify-css')

gulp.task('default', ['css'], function () {
  return gulp.src('public/js/src/*.coffee')
  .pipe(coffee())
  .pipe(uglify())
  .pipe(gulp.dest('public/js/build/'))
})

gulp.task('css', function () {
  return gulp.src('public/css/src/*.scss')
  .pipe(sass())
  .pipe(minify())
  .pipe(gulp.dest('public/css/build/'))
})
