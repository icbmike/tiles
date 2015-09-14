var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify');

gulp.task('build', function(){
	gulp.src('app.js')
		.pipe(browserify({}))
		.pipe(uglify())
		.pipe(gulp.dest('./build/app.min.js'))
});