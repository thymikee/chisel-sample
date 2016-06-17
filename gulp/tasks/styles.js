'use strict';

var stylesTask = function (gulp, plugins, config, helpers) {
  gulp.task('styles', function() {
    var src = config.paths.src + '/styles/*.scss';
    var dest = config.paths.dest + '/styles';
    
    return gulp.src(src)
      .pipe(plugins.plumber(helpers.onError))
      .pipe(plugins.cssGlobbing({ extensions: ['.scss', '.css'] }))
      .pipe(plugins.sass())
      .pipe(gulp.dest(dest))
      .pipe(plugins.browserSync.stream());
  });
};

module.exports = stylesTask;
