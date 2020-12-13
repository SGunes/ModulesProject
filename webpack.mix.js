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
// .js('resources/js/p/app.js', 'public/p/js')
// .sass('resources/sass/p/app.scss', 'public/p/css');

var themes = ["a1","a2","a3"];
themes.forEach(value => {
    mix.js('resources/themes/' + value + '/js/app.js', 'public/f/' + value + '/js')
        .sass('resources/themes/' + value + '/sass/app.scss', 'public/f/' + value + '/css');
});