var gulp = require('gulp');
var pandoc = require('gulp-pandoc');
var browserSync = require('browser-sync');

gulp.task('pandoc', function(){
    gulp.src('*.md')
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
    gulp.src('*.md')
	.pipe(pandoc({
	    from:'markdown',
	    to:'epub',
	    ext:'.html',
	    args:['--output=sample.epub',
		  '-s',
		  '--include-in-header=defstyle.css',
		  '--filter=plantuml-filter.js']}))
	.pipe(gulp.dest('html/'));
});

gulp.task('browser-sync', function(){
    browserSync.init({
	server: {
	    baseDir: './html/',
	    index: 'sample.html'
	}
    });
});

gulp.task('reload', function(){
    browserSync.reload();
});

gulp.task('default',['pandoc','browser-sync'], function(){
    gulp.watch('*.md', ['pandoc']);
    gulp.watch('./html/*.html', ['reload']);
});

