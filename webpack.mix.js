const mix = require('laravel-mix');

mix
    .js('src/js/javascript.js', 'assets/javascript.js')
    .sass('src/sass/style.scss', 'assets/stylesheet.css');
