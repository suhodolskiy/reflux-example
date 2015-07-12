var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

gulp.task('browserify', function() {
    gulp.src('src/js/app.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
    gulp.src('src/css/style.css')
        .pipe(gulp.dest('dist/css'))
    gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img')) 
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});