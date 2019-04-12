var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('yohaz', function(done) {
    console.log('yo yo yo hazzyhazzyhazhazzer')
    done()
})

gulp.task('sass',function() {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

gulp.task('watcher', function() {
    gulp.watch('scss/**/*.scss', gulp.series('sass', 'yohaz'))
})
