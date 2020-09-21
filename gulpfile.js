var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

function css_style(done){

    gulp.src('./sass/style.sass')
        .pipe(sass({
            errorLogToConsole: true
        }))
        .on('error', console.error.bind(console))
        .pipe( rename('main.css') )
        .pipe( gulp.dest('./css/') );

    done();
}

gulp.task(css_style);