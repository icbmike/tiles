var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('build', function(){
	gulp.src('app.js')
		.pipe(browserify({}))
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('./build'))
});