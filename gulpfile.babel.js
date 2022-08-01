'use strict';
/* Set htmlOrWp to TRUE if work with html, else - FALSE */
const htmlOWp = true;

/* Set environmentProd to TRUE if build for Production, or FALSE if this is development build*/
const environmentProd = true;

/* Import Base dependencies */
const config = require('config');
const gulp = require('gulp');
const lazypipe = require('lazypipe');
const replace = require('gulp-replace');
const extReplace = require("gulp-ext-replace");

/* Gulp Plugins */
const plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

/* Import and config BrowserSync */
const browserSync = require('browser-sync').create();
let  args = {
  notify: false,
  port: 9090
};
if (htmlOWp === true) {
  args = {
    server: {
      baseDir: config.path.base.dest,
    }
  };
} else {
  args = {
    proxy: config.domain,
    host: config.domain
  };
}

/* Stylesheet Dependencies */
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');

// /* PostCSS plugins */
// import postcssPresetEnv from 'postcss-preset-env';
// import cssnano from 'cssnano';
// import easysprite from 'postcss-easysprites';
// import urlrev from 'postcss-urlrev';
// import discardDuplicates from 'postcss-discard-duplicates';
// import discardEmpty from 'postcss-discard-empty';
// import combineDuplicatedSelectors from 'postcss-combine-duplicated-selectors';
// import charset from 'postcss-single-charset';
// import willChangeTransition from 'postcss-will-change-transition';
// import willChange from 'postcss-will-change';
// import momentumScrolling from 'postcss-momentum-scrolling';
// // import webpcss from 'webpcss';

/* Config stylesheets build*/
// let processors = [
//   charset(),
//   willChangeTransition(),
//   willChange(),
//   momentumScrolling([
//     'scroll'
//   ]),
//   discardDuplicates(),
//   discardEmpty(),
//   combineDuplicatedSelectors({
//     removeDuplicatedProperties: true
//   }),
//   easysprite({
//     imagePath:'./assets/img/sprites',
//     spritePath: './assets/img/sprites'
//   }),
//   // webpcss({
//   //   copyBackgroundSize: true
//   // }),
//   // https://github.com/hail2u/node-css-mqpacker#options
//   // mqpacker({
//   //   sort: function (a, b) {
//   //     return a.localeCompare(b);
//   //   }
//   // }),
//   urlrev(),
//   postcssPresetEnv({
//     stage: 4,
//     warnForDuplicates: false
//   }),
//   cssnano({
//     preset: 'advanced',
//     reduceIdents: true,
//     zindex: false
//   })
// ];

/* Images Dependencies */
// const imageminWebp = require("imagemin-webp");
// const imageminPngquant = require('imagemin-pngquant');
// const imageminMozjpeg = require('imagemin-mozjpeg');
// const imageminAdvpng = require('imagemin-advpng');
// const imageminGuetzli = require('imagemin-guetzli');

/* JS Dependencies */

/* Other Dependencies */

/* Pre-Config Path */
if (htmlOWp === false) {
  config.path.base.wp = './wp-content/themes/' + config.theme + '/';
  // config.path.base.wp = './html/'; /* only for php files located in html */
  ChangeBasePath(config);
  config.path.base.dest = config.path.base.wp;
}

/* Start Build */
if (environmentProd === true) {
  console.log('\x1b[32m', process.env.NODE_ENV);
  console.log('\x1b[32m', '---------PRODUCTION ---------');
  console.log('\x1b[36m', '---------Sourcemaps DISABLED!---------');
} else {
  console.log('\x1b[31m', process.env.NODE_ENV);
  console.log('\x1b[31m', '---------DEV----------');
  console.log('\x1b[31m', '---------Sourcemaps ENABLED!---------');
}

/* Compile and automatically prefix stylesheets */
gulp.task('styles', function() {
  // For best performance, don't add Sass partials to `gulp.src`
  const srcPath = config.path.styles.srcfiles,
  destPath = config.path.styles.dest;
  return gulp.src(srcPath, { base: config.path.styles.src })
    .pipe(customErrorPlumber('Error Running Sass'))
    // .pipe(plugins.newer(destPath))
    .pipe(plugins.changed(destPath, {extension: '.css'}))
    .pipe(plugins.if(!environmentProd, plugins.sourcemaps.init()))
    // TODO: add minifycss if PROD
    .pipe(sass({
      // outputStyle: 'compact',
      precision: 5,
      onError: console.error.bind(console, 'Sass error:')
    }))
    // .pipe(plugins.postcss(processors))
    .pipe(plugins.postcss([ autoprefixer() ]))
    .pipe(plugins.if(!environmentProd, plugins.sourcemaps.write('maps', {includeContent: true})))
    .pipe(gulp.dest(destPath))
    .pipe(plugins.filter('**/*.css'))
    .pipe(plugins.size({
      showFiles: true,
      title: 'task: SCSS && PostCSS'
    }))
    .pipe(browserSync.reload({stream: true}));
});

/* Optimize images */
gulp.task('image:default', function () {
  return gulp
    .src(config.path.images.srcimg)
    .pipe(plugins.newer(config.path.images.dest))
    // .pipe(plugins.bytediff.start())
    // .pipe(plugins.if(
    //   '*.png',
    //   plugins.imagemin([
    //     // imageminPngquant(),
    //     // imageminAdvpng(),
    //   ])
    // ))
    // .pipe(plugins.if(
    //   '*.jp*g',
    //   plugins.imagemin([
    //     imageminMozjpeg({progressive: true}),
    //     imageminGuetzli({quality: 95}),
    //   ])
    // ))
    // .pipe(plugins.if(
    //   '*.gif',
    //   plugins.imagemin([
    //     plugins.imagemin.gifsicle({
    //       interlaced: true
    //     }),
    //   ])
    // ))
    // .pipe(plugins.if(
    //   '*.svg',
    //   plugins.imagemin([
    //     plugins.imagemin.svgo({
    //       plugins: [{
    //         removeViewBox: true
    //       }]
    //     })
    //   ])
    // ))
    // .pipe(plugins.bytediff.stop(function(data) {
    //   var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    //   return data.fileName + ' is ' + data.percent + '%' + difference;
    // }))
    // .pipe(plugins.size({
    //   showFiles: true,
    //   title: 'task:image: '
    // }))
    .pipe(gulp.dest(config.path.images.dest))
    .pipe(browserSync.reload({stream: true}));
});

/* Make sprite from images */
gulp.task('image:sprite', function () {
  return gulp
    .src(config.path.images.src + 'sprites/**/*.{png,svg}')
    // .pipe(plugins.newer(config.path.images.dest))
    // .pipe(plugins.if(
    //   '*.png',
    //   plugins.imagemin([
    //     // imageminPngquant(),
    //     // imageminAdvpng(),
    //   ])
    // ))
    // .pipe(plugins.if(
    //   '*.svg',
    //   plugins.imagemin([
    //     plugins.imagemin.svgo({
    //       plugins: [{
    //         removeViewBox: true
    //       }]
    //     })
    //   ])
    // ))
    // .pipe(plugins.size({
    //   showFiles: true,
    //   title: 'task: image_sprite: '
    // }))
    .pipe(gulp.dest(config.path.images.dest + 'sprites/'))
    .pipe(browserSync.reload({stream: true}));
});

/* Convert images to webp */
gulp.task("image:image2webp", function() {
  // return gulp.src([config.path.images.dest + '**/*.{png,jpg,jpeg}'])
  //   // .pipe(plugins.newer(config.path.images.dest))
  //   .pipe(plugins.imagemin([
  //     imageminWebp({
  //       quality: 95
  //     })
  //   ]))
  //   .pipe(extReplace(".webp"))
  //   .pipe(gulp.dest(config.path.images.dest));
});

gulp.task("image:image2webpContent", function() {
  // return gulp.src(config.path.images.srcImgContent + '**/*.{png,jpg,jpeg}')
  //   // .pipe(plugins.newer(config.path.images.dest))
  //   .pipe(plugins.imagemin([
  //     imageminWebp({
  //       quality: 95
  //     })
  //   ]))
  //   .pipe(extReplace(".webp"))
  //   .pipe(gulp.dest(config.path.images.srcImgContent));
});

/* Copy fonts from assets folder to destination */
gulp.task('fonts', function() {
  return gulp.src(config.path.fonts.src)
    .pipe(customErrorPlumber('Error Running Fonts'))
    .pipe(plugins.newer(config.path.fonts.dest))
    .pipe(gulp.dest(config.path.fonts.dest))
    .pipe(plugins.size({
      showFiles: true,
      title: 'task:fonts'
    }))
    .pipe(browserSync.reload({stream: true}));
});


const jsConcat = lazypipe()
  .pipe(plugins.concat, 'scripts.js', {newLine: '\n;'});

/* Optimize JS scripts */
gulp.task('scripts', function() {
  return gulp.src(config.path.scripts.src)
    .pipe(customErrorPlumber('Error Running Scripts'))
    .pipe(plugins.newer(config.path.scripts.dest))
    .pipe(customErrorPlumber('Error Compiling Scripts'))
    .pipe(plugins.if(!environmentProd, plugins.sourcemaps.init()))
    .pipe(plugins.babel({
			presets: ['env']
		}))
    .pipe(plugins.if(['scripts.js' /*,'scripts2.js'*/], jsConcat()))
    .pipe(plugins.if('*.js', plugins.uglify()))
    .pipe(plugins.if(!environmentProd, plugins.sourcemaps.write('maps', {includeContent: true})))
    .pipe(gulp.dest(config.path.scripts.dest))
    .pipe(plugins.filter('**/*.js'))
    .pipe(plugins.size({
      showFiles: true,
      title: 'task:scripts:'
    }))
    .pipe(browserSync.reload({stream: true}));
});

/* Base Gulp tasks */
gulp.task('task:images', gulp.series('image:default', 'image:sprite'));
// gulp.task('task:images', gulp.series('image:default', 'image:sprite', 'image:image2webp'));
gulp.task('task:images-styles', gulp.series('task:images', 'styles'));
gulp.task('parallel-scripts-images-styles', gulp.parallel('task:images-styles', 'scripts', 'fonts'));

gulp.task('default', gulp.parallel(
  'task:images-styles',
  // 'image:image2webpContent', // tempolary disable it
  'scripts',
  'fonts',
));

gulp.task('build', gulp.parallel(
  'task:images-styles',
  // 'image:image2webpContent', // tempolary disable it
  'scripts',
  'fonts'
));


/* Gulp watcher */
gulp.task('watch', function() {

  browserSync.init(args);

  gulp.watch(config.path.base.desthtml).on('change', browserSync.reload);

  gulp.watch(config.path.styles.srcfiles, gulp.series('styles'));

  gulp.watch(config.path.images.srcimg, gulp.series('task:images'));

  gulp.watch(config.path.fonts.src, gulp.series('fonts'));

  gulp.watch(config.path.scripts.src, gulp.series('scripts'));

});

/* Consolidated development phase task */
gulp.task('serve', gulp.series('parallel-scripts-images-styles', 'watch'));

/* Custom helper functions */
/* Plumber function for catching errors */
function customErrorPlumber(errTitle) {
  return plugins.plumber({
    errorHandler: plugins.notify.onError({
      // Customizing error title
      title: errTitle || 'Error running Gulp',
      message: 'Error: <%= error.message %>',
      sound: 'Bottle'
    })
  });
};
module.exports = customErrorPlumber;

function ChangeBasePath(config) {
  config.path.images.dest = config.path.images.dest.replace(config.path.base.dest, config.path.base.wp);
  config.path.fonts.dest = config.path.fonts.dest.replace(config.path.base.dest, config.path.base.wp);
  config.path.styles.dest = config.path.styles.dest.replace(config.path.base.dest, config.path.base.wp);
  config.path.scripts.dest = config.path.scripts.dest.replace(config.path.base.dest, config.path.base.wp);
  config.path.base.desthtml = config.path.base.desthtml.replace(config.path.base.dest, config.path.base.wp);
}



// TODO: retina display mixnis transfer from mixin


// https://www.npmjs.com/package/gulp-sourcemaps
// https://www.npmjs.com/package/gulp-changed
// https://www.npmjs.com/package/gulp-newer
// https://www.npmjs.com/package/cross-env
// https://github.com/postcss/autoprefixer

// TODO:
// https://www.npmjs.com/search?q=keywords:postcss
// https://www.npmjs.com/package/dotenv
// https://www.npmjs.com/search?q=config
// https://www.npmjs.com/package/configstore
// https://www.npmjs.com/package/cosmiconfig
// https://www.npmjs.com/package/uglify-js
// https://www.npmjs.com/package/terser
// https://www.npmjs.com/package/svgo
// https://www.npmjs.com/package/cssnano
// https://www.npmjs.com/package/csso
