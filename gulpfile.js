var gulp         = require('gulp'),
    jade         = require('gulp-jade'),
    stylus       = require('gulp-stylus'),
    postcss      = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer-core'),
    uglify       = require('gulp-uglify'),
    csso         = require('gulp-csso');

gulp.task('templates', function () {
    gulp.src('./*.jade')
        .pipe(jade({
            locals: {}
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('style', function () {
    gulp.src('./style.styl')
        .pipe(stylus())
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['ie 7', 'ie 8'] }) ]))
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('copy images', function () {
    gulp.src(['./images/*.gif', './images/*.jpg'])
        .pipe(gulp.dest('./build/images/'));
});

gulp.task('js', function () {
    gulp.src('script.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('watch', function () {
    gulp.watch('./*.jade', ['templates']);
    gulp.watch('./*.styl', ['style']);
    gulp.watch('./script.js', ['js']);
});

gulp.task('build', ['templates', 'style', 'copy images', 'js']);
gulp.task('default', ['build', 'watch']);
