const { watch } = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

function server(cb) {
    browserSync.init({
        server: {
            baseDir: 'src',
            index: 'index.html'
        }
    })
    watch('src/*.html').on('all', reload);
}

exports.server = server;
