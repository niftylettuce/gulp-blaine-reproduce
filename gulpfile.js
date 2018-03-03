const hasChangedDepsAsync = require('gulp-haschanged-deps-async');
const gulp = require('gulp');
const changed = require('gulp-changed');

const SRC = 'src/**/*.js';
const DEST = 'dist';

gulp.task('default', () =>
  gulp
    .src(SRC)
    .pipe(
      changed(DEST, {
        hasChanged: hasChangedDepsAsync({
          allowMissingDeps: false
        })
      })
    )
    .pipe(gulp.dest(DEST))
);
