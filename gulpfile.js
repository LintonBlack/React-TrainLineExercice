var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var notify = require("gulp-notify");
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jasmine = require('gulp-jasmine');

var jasmineBrowser = require('gulp-jasmine-browser');

var config = {
	path :  {
		styles :'app/assets/',
		js :'app/script/',
		test :'app/specs/',
		lib :'app/lib/'
	}
}
gulp.task('sass', function () {
  return gulp.src(config.path.styles +'sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.path.styles +'css'));
});

gulp.task('live-server',function(){
    var server = new LiveServer('server/app.js');
    server.start();    
})

gulp.task('server', ['live-server'], function(){
    browserSync.init(null,{
        proxy:"http://localhost:7777",
        port: 9001
    })
});

gulp.task('watch', function() {
  gulp.watch(config.path.styles+'sass', ['sass']);
});


gulp.task('test',function() { 
	return gulp.src([
		config.path.lib+'jquery.min.js',
		config.path.lib+'react.js',
    config.path.lib+'react-dom.js',
		config.path.js+'*.js',
		config.path.test +'*.js'])
		.pipe(jasmineBrowser.specRunner())
    	.pipe(jasmineBrowser.server({port: 8888}));
    	
    });

gulp.task('style', function() {
  return gulp.src(config.path.js +'*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
          verbose:true
        }));

});

gulp.task('build', ['sass','style']);
gulp.task('default', ['server','watch','test']);