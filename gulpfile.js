let gulp = require('gulp'),
sass = require('gulp-sass'),
plumber = require('gulp-plumber'),
prefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
browserSync = require('browser-sync').create(),
reload = browserSync.reload;
cleanCss = require('gulp-clean-css') ;


gulp.task('build',function(){
  gulp.src('sass/main.scss')
  .pipe(plumber())
  .pipe(sass({
    outputStyle:'compressed'
  }))
  .pipe(prefixer({
    browsers: ['last 20 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css'));
});




gulp.task('serve',function(){
   browserSync.init({
     server:"./"
   });
});

gulp.task('watch',function(){
  gulp.watch('sass/*.scss' , ['build'])
  gulp.watch(['sass/*.scss','index.html']).on('change',reload)
  
});

gulp.task('default', ['build','watch','serve']);