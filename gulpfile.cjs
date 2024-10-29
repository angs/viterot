const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

// Paths
const paths = {
  scripts: {
    src: 'src/*.ts',  // Adjusted for TypeScript files
    dest: 'dist/js'
  },
  styles: {
    src: 'src/*.css',  // Modify this path to your CSS files
    dest: 'dist/css'
  }
};

// Minify JavaScript
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Minify CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(concat('styles.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Watch files
function watchFiles() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

// Define complex tasks
const build = gulp.series(gulp.parallel(styles, scripts));
const watch = gulp.series(build, watchFiles);

// Export tasks
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watch;
exports.build = build;
exports.default = build; // or replace `build` with another task, such as `watch`
