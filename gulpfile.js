
var gulp = require('gulp')
var coffee = require('gulp-coffee')
var uglify = require('gulp-uglify')
var sass = require('gulp-sass')
var minify = require('gulp-minify-css')

gulp.task('default', ['css'], function () {
  return gulp.src('src/coffee/*.coffee')
  .pipe(coffee())
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
})

gulp.task('css', function () {
  return gulp.src('src/sass/*.scss')
  .pipe(sass())
  .pipe(minify())
  .pipe(gulp.dest('dist/css/'))
})
