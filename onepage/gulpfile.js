"use strict";
const gulp = require('gulp');
// Load plugin
const sass = require('gulp-sass')(require('node-sass'));
const cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// ca sa transformam fisiere sass/scss in fisiere css: gulp sass
gulp.task('sasstocss', function () {
    return gulp.src('dev/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});
// ca sa optimizam fisierele css : gulp css
gulp.task("css", () => {
    return gulp
        .src("assets/css/style.css")

        .pipe(
            cleanCSS({ debug: true }, (details) => {
                console.log(`${details.name}: ${details.stats.originalSize}`);
                console.log(`${details.name}: ${details.stats.minifiedSize}`);
            }),
        )
        .pipe(
            rename({
                suffix: ".min",
            })
        )
        .pipe(gulp.dest("assets/css/"));
});
// genereaza in mod automat fisierul css la modificarile diin fisierele scss
gulp.task('sass:watch', function () {
    gulp.watch('dev/sass/style.scss', gulp.series('sasstocss', 'css'));

});