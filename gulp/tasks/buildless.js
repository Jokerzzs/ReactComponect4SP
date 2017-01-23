﻿import gulp from 'gulp';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import cssmin from 'gulp-minify-css';
import source from 'vinyl-source-stream';
import config from '../../config.js';
import concat from 'gulp-concat';
import del from 'del';

function handlerError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('buildless', function () {
    gulp.start('buildless-wp', 'buildless-layout');
})

gulp.task('buildless-wp', function () {
    let srcs = new Set();
    for (let webpart of config.webparts) {
        srcs.add(path.join(config.rootpath, webpart.style));
    }
    buildless(Array.from(srcs),
        'webparts.css',
        path.join(config.rootpath, config.webpartStyleoutput));
})


gulp.task('buildless-layout', function () {
    for (let layout of config.layouts) {
        buildless([path.join(config.rootpath, layout.style)],
            layout.bundlecss,
            path.join(config.rootpath, config.layoutStyleoutput, layout.name));
    }
})

function buildless(srcs, name, dest) {
    del(path.join(dest, name));
    gulp.src(srcs)
        .pipe(concat(name))
        .pipe(less())
        .pipe(cssmin())
        .on('error', handlerError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));
}

gulp.task('watchless', function () {
    gulp.watch(config.config.src, ['buildless']);
})