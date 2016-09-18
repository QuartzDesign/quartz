'use strict';

var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webserver  = require('gulp-webserver');
var tsc        = require('gulp-typescript');

gulp.task('sass-expanded', function() {
    return gulp.src('sass/quartz.sass')
               .pipe(sourcemaps.init())
               .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
               .pipe(sass().on('error', sass.logError))
               .pipe(sourcemaps.write('maps/'))
               .pipe(gulp.dest('css/quartz-expanded'))
})

gulp.task('sass-compressed', function() {
    return gulp.src('sass/quartz.sass')
               .pipe(sourcemaps.init())
               .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
               .pipe(sass().on('error', sass.logError))
               .pipe(sourcemaps.write('maps/'))
               .pipe(gulp.dest('css/quartz-minified'))
})

gulp.task('sass:watch', function() {
    gulp.watch('sass/**/*.sass', ['sass-compressed', 'sass-expanded'])
})

gulp.task('default', ['sass-expanded', 'sass-compressed'])
