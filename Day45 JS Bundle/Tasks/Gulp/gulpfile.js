const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

// JS bundle
function scripts() {
  return src("src/js/**/*.js")
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"));
}

// CSS bundle
function styles() {
  return src("src/css/**/*.css")
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(dest("dist/css"));
}

exports.default = scripts;
exports.styles = styles;
