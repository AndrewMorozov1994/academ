const gulp = require("gulp");
const del = require(`del`);
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const rollup = require(`gulp-better-rollup`);
const sourcemaps = require(`gulp-sourcemaps`);
const babel = require(`rollup-plugin-babel`);

gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);

  gulp.task(`scripts`, () => {
    return gulp.src('source/js/**/*.js')
      .pipe(plumber())
      .pipe(rollup({
        plugins: [
          babel({
            presets: [
              [
                `es2015`,
                {modules: false}
              ],
            ],
            exclude: 'node_modules/**',
          })
        ]
      }, `iife`))
      .pipe(sourcemaps.write(``))
      .pipe(gulp.dest(`build/js`));
  });

gulp.task(`copy-img`, () => {
  return gulp.src(`source/img/*.*`).
    pipe(gulp.dest(`build/img`));
});

gulp.task(`copy-fonts`, () => {
  return gulp.src(`source/fonts/*.{woff,woff2,ttf}`).
    pipe(gulp.dest(`build/fonts`));
});

// Шрифты и ajax-loader для SLICK'а
gulp.task(`copy-slick`, () => {
  return gulp.src(`source/slick/**/*.{woff,ttf,gif,css}`).
    pipe(gulp.dest(`build/css`));
});
//

gulp.task(`copy`, [`copy-html`, `copy-fonts`, `copy-img`, `scripts`, `style`, `copy-slick`], () => {
});


gulp.task(`copy-html`, () => {
  return gulp.src(`source/*.{html,ico,json}`).
  pipe(gulp.dest(`build`)).
  pipe(server.stream());
});

gulp.task(`js-watch`, [`scripts`], (done) => {
  server.reload();
  done();
});

  gulp.task("clean", function () {
    return del("build");
  });

gulp.task(`serve`, [`assemble`], () => {
  server.init({
    server: `./build`,
    notify: false,
    open: true,
    port: 3502,
    ui: false
  });

  gulp.watch(`source/sass/**/*.{scss,sass}`, [`style`]);
  gulp.watch(`source/*.html`).on(`change`, (e) => {
    if (e.type !== `deleted`) {
      gulp.run(`copy-html`);
    }
  });
  gulp.watch(`source/js/**/*.{js,jsx}`, [`js-watch`]);
});

gulp.task(`assemble`, [`clean`], () => {
  gulp.start(`copy`, `style`);
});

gulp.task(`build`, [`assemble`], () => {
});
