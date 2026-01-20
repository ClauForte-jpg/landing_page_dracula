const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Esta função leva o seu index da raiz para dentro da DIST
function comprimeHtml() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

// Aqui exportamos tudo uma única vez
exports.default = gulp.parallel(styles, images, scripts, comprimeHtml);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
    gulp.watch('./index.html', gulp.parallel(comprimeHtml)); 
};	