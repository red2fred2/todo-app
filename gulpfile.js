const gulp          = require('gulp'),
      ejs           = require('gulp-ejs'),
      rename        = require('gulp-rename'),
      sass          = require('gulp-sass'),
      cssmin        = require('gulp-cssmin'),
      htmlmin       = require('gulp-htmlmin'),
      renderingData = require('./pages/renderingData.json')

//ejs
gulp.task('ejs', function() {
  gulp.src('./pages/*.ejs')
  .pipe(
    ejs({data:renderingData})
  )
  .pipe(
    htmlmin({collapseWhitespace: true})
  )
  .pipe(
    rename(function(path) {
      path.extname = '.min.html'
    })
  )
  .pipe(
    gulp.dest('./rendered')
  )
})

//scss
gulp.task('scss', function() {
  gulp.src('./style/*.scss')
	.pipe(
    sass({style:'expanded'})
  )
  .pipe(
    cssmin()
  )
	.pipe(
    rename(function(path) {
      path.extname = '.min.css'
    })
  )
	.pipe(
    gulp.dest('./rendered')
  )
})

gulp.task('default', ['ejs', 'scss'])