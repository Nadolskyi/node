var gulp = require('gulp'); // Сообственно Gulp JS
   
var concat = require('gulp-concat');
 
gulp.task('concat', function() {
  return gulp.src(['./lib/file1.js', './lib/file2.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public'));
});
