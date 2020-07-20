const mix = require('laravel-mix');

mix
    .js('src/js/index.js', 'assets/index.js')
    .sass('src/sass/index.scss', 'assets/stylesheet.css');
