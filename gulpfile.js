const { src, dest , watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const reload = browserSync.reload;

function css() {
    return src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('src/css'))
        .pipe(reload())
}

function server() {
    browserSync.init({
        server: {
            baseDir: 'src',
            index: 'index.html'
        }
    })
    watch('src/*.html').on('all', reload);
    watch('src/scss/**/*.scss', css);
}

exports.server = server;
