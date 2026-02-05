const { src, dest, series, parallel, watch } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const cleanCss = require("gulp-clean-css");
const optimizeImage = require("gulp-optimize-images");

const globalPaths = {
  html: "project/index.html",
  css: "project/css/**/*.css",
  js: "project/js/**/*.js",
  img: "project/pics/*",
};

// pipe
function htmlTask() {
  // access html file
  return (
    src(globalPaths.html)
      // minify html
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
      .pipe(dest("dist"))
  );
}

// exports.htmltask = htmlTask;

function cssTask() {
  return (
    src(globalPaths.css)
      .pipe(concat("styles.min.css"))
      // minify
      .pipe(cleanCss())
      .pipe(dest("dist/assets/css"))
  );
}

// exports.css = cssTask;

function jsTask() {
  return (
    src(globalPaths.js, { sourcemaps: true })
      .pipe(concat("script.min.js"))
      // minify
      .pipe(terser())
      .pipe(dest("dist/assets/js", { sourcemaps: "." }))
  );
}

// exports.jstask = jsTask;

function imgTask() {
  return src(globalPaths.img, { encoding: false })
    .pipe(
      optimizeImage({
        compressOptions: {
          jpeg: { quality: 60 },
        },
      })
    )
    .pipe(dest("dist/assets/images"));
}

function watchTasks(){
  watch(globalPaths.html,htmlTask)
  watch(globalPaths.css,cssTask)
  watch(globalPaths.js,jsTask)
  watch(globalPaths.img,imgTask)
}
// exports.imgtask = imgTask;

// function dummyfun(){
// //code
// return Promise.resolve()
// }

// exports.task1=dummyfun
// exports.default=dummyfun

// exports.default = series(htmlTask, cssTask, jsTask, imgTask);
exports.default = series(parallel(htmlTask, cssTask, jsTask, imgTask),watchTasks);
