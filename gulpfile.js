const gulp   = require('gulp'),
      ejs    = require('gulp-ejs'),
      rename = require('gulp-rename'),
      using  = require('gulp-using'),
      scss   = require('gulp-scss'),
      renderingData = require('./pages/renderingData.json')

//ejs
gulp.src('./pages/*.ejs')
.pipe(
  ejs(
    {data:renderingData}
  )
)
.pipe(
  rename(function (path) {
    path.extname = '.html'
  })
)
.pipe(
  gulp.dest('./rendered')
)

//scss
gulp.src('./style/*.scss')
.pipe(
  scss({'bundleExec': true})
)
.pipe(
  gulp.dest('./rendered')
)