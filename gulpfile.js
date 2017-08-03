var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
gulp.task('jade', function(){
    gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'));
});
gulp.task('sass', function() {
  gulp.src('./src/*.sass')
    .pipe(sass({
        pretty:true
     }))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('watch', function(){
    gulp.watch('./src/*.jade', ['jade']);
    gulp.watch('./src/*.sass', ['sass']);
});
gulp.task('default', ['sass', 'jade', 'watch']);
