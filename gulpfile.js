const gulp          = require('gulp'),
      del           = require('del'),
      ejs           = require('gulp-ejs'),
      rename        = require('gulp-rename'),
      sass          = require('gulp-sass'),
      cssmin        = require('gulp-cssmin'),
      htmlmin       = require('gulp-htmlmin'),
      inline        = require('gulp-inline'),
      babel         = require('gulp-babel'),
	    wait          = require('gulp-wait'),
      uglify        = require('gulp-uglify'),
			jsx           = require('gulp-jsx'),
      renderingData = require('./pages/renderingData.json')

//clean build folder
gulp.task('clean', function() {
  del('./rendered/**')
})

//ejs
gulp.task('ejs', ['clean'], function() {
  gulp.src('./pages/*.ejs')
  .pipe(
    ejs({data:renderingData})
  )
  .pipe(
    rename(function(path) {
      path.extname = '.html'
    })
  )
  .pipe(
    gulp.dest('./rendered')
  )
})

//scss
gulp.task('scss', ['ejs'], function() {
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

//jsx
gulp.task('jsx', ['scss'], function() {
	gulp.src('./scripts/*.jsx')
	.pipe(
	  jsx({factory: 'React.createClass'})
	)
	.pipe(
    babel()
	)
	//.pipe(
  //  uglify()
	//)
	.pipe(
    rename(function(path) {
      path.extname = '.js'
    })
  )
	.pipe(
	  gulp.dest('./rendered')
	)
})

//babel
gulp.task('babel', ['jsx'], function() {
	gulp.src('./scripts/*.js')
	.pipe(
    babel()
	)
	.pipe(
    uglify()
	)
	.pipe(
	  gulp.dest('./rendered')
	)
})

//inline
gulp.task('inline', ['babel'], function() {
	gulp.src('./rendered/*.html')
	.pipe(
	  wait(200)
	)
	.pipe(
	  inline()
	)
	.pipe(
    htmlmin({collapseWhitespace: true})
  )
	.pipe(
    gulp.dest('./rendered')
  )
})

gulp.task('default', ['inline'])