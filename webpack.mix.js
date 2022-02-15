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



mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
  

mix.sass('resources/sass/costum/style.scss', 'public/css');
mix.sass('resources/sass/costum/confirm-delivery.scss', 'public/css');
mix.sass('resources/sass/costum/checkbox-radio-input.scss', 'public/css');
mix.sass('resources/sass/costum/detail-restaurant-tabs.scss', 'public/css');
mix.sass('resources/sass/costum/sign-in.scss', 'public/css');
mix.sass('resources/sass/costum/help-page.scss', 'public/css');


mix.js('resources/js/main.js', 'public/js');
mix.js('resources/js/maps.js', 'public/js');
mix.js('resources/js/costum-slick.js', 'public/js');

mix.postCss("resources/css/main.css", "public/css", [
        require("tailwindcss"),
]);