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

mix.js(['resources/js/app.js','resources/js/datatables-simple-demo.js','resources/js/scripts.js'], 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.scss')
    .styles('resources/css/sb-admin.css','public/css/app.css')
    .styles('resources/css/sidebar.css','public/css/sidebar.css')
    .styles('node_modules/bootstrap/dist/css/bootstrap.css', 'public/css/bootstrap.css')
    .styles('node_modules/sweetalert2/dist/sweetalert2.css', 'public/css/sweetalert2/sweetalert2.css')
    .styles('node_modules/sweetalert2/dist/sweetalert2.min.css', 'public/css/sweetalert2/sweetalert2.min.css')
    .styles('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css')
    .scripts(['resources/assets/demo/chart-area-demo.js', 'resources/assets/demo/chart-bar-demo.js', 'resources/assets/demo/chart-pie-demo.js', 'resources/assets/demo/datatables-demo.js'], 'public/js/assets.js')
    .scripts('node_modules/bootstrap/dist/js/bootstrap.js', 'public/js/bootstrap.js')
    .scripts('node_modules/sweetalert2/dist/sweetalert2.js', 'public/js/sweetalert2/sweetalert2.js')
    .scripts('node_modules/sweetalert2/dist/sweetalert2.min.js', 'public/js/sweetalert2/sweetalert2.min.js')
    .scripts('resources/js/sidebar.js', 'public/js/sidebar.js')
    .sourceMaps();
