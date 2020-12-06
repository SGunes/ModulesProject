const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/f/app.js', 'public/f/js')
    // .js('resources/js/p/app.js', 'public/p/js')
    .sass('resources/sass/f/app.scss', 'public/f/css');
    // .sass('resources/sass/p/app.scss', 'public/p/css');
