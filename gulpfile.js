const { task, src, dest, watch, series } = require('gulp');

const obfuscateJS = require('gulp-javascript-obfuscator');
const minifyCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const concat = require('gulp-concat');

// Main file - Single JS and CSS Source
const js_src = 'assets/js/app.js';
const css_src = 'assets/css/styles.css';

// Multiple files
const mul_js_src = 'assets/js/**/*.js';
const mul_css_src = 'assets/css/**/*.css';

// Build Directory
const build_css_dir = 'assets/build/';
const build_js_dir = 'assets/build/';

// Minify Single CSS file
task('minify_css', () => {
    return src(css_src) // set source code location
        .pipe(minifyCSS()) // minify css file
        .pipe(rename('styles.min.css')) // change file name
        .pipe(dest(build_css_dir)); //set destination of processed file
});


// Obfuscate Single JS file
task('obfuscate_js', () => {
    return src(js_src)
        .pipe(obfuscateJS()) // minify and obfuscate js file
        .pipe(rename('bundle.obf.js')) // change file name
        .pipe(dest(build_js_dir)); //set destination of processed file
});


// Minify multiple CSS files
task('minify_multiple_css', () => {
    return src(mul_css_src) // set source code location
        .pipe(concat('bundle.min.css')) // Concatenates files
        .pipe(minifyCSS()) // minify css file
        .pipe(dest(build_css_dir)); //set destination of processed file
});

// Obfuscate and minify multiple CSS files
task('obfuscate_multiple_js', () => {
    return src(mul_js_src)
        .pipe(concat('bundle.obf.js')) // Concatenates files
        .pipe(obfuscateJS()) // minify and obfuscate js file
        .pipe(dest(build_js_dir)); //set destination of processed file
});

// Gulp Watch
task('watch', run => {
    watch(css_src, series('minify_css'));
    watch(js_src, series('obfuscate_js'));
    watch(mul_css_src, series('minify_multiple_css'));
    watch(mul_js_src, series('obfuscate_multiple_js'));
    run();
});

// Testing task
task('test', complete => {
    console.log(`
        ***************************************
        *                                     *
        * T E S T   G U L P   C O M P L E T E *
        *                                     *
        ***************************************
    `);
    complete();
});