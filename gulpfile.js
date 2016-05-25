var gulp = require('gulp');
var pandoc = require('gulp-pandoc');
var browserSync = require('browser-sync');
var del = require('del');

gulp.task('pandoc', function(){
    del(['./html/doc-files/*.png']);
    gulp.src('./src/*.md')
	.pipe(pandoc({
	    from:'markdown',
	    to:'html5',
	    ext:'.html',
	    args:['-s',
		  '--include-in-header=defstyle.css',
		  '--filter=plantuml-filter.js',
		  '--metadata=plantuml-root:html']}))
	.pipe(gulp.dest('html/'));
});

gulp.task('epub',  function(){
    del(['./html/doc-files/*.png']);
    gulp.src('./src/*.md')
	.pipe(pandoc({
	    from:'markdown',
	    to:'epub',
	    ext:'.html',
	    args:['--output=sample.epub',
		  '-s',
		  '--epub-stylesheet=defstyle.css',
		  '--filter=plantuml-filter.js']}));
});

gulp.task('browser-sync', function(){
    browserSync.init({
	server: {
	    baseDir: './html/',
	    index: 'README.html'
	}
    });
});

gulp.task('reload', function(){
    browserSync.reload();
});

gulp.task('default',['pandoc','browser-sync'], function(){
    gulp.watch('./src/*.md', ['pandoc']);
    gulp.watch('./html/*.html', ['reload']);
});

