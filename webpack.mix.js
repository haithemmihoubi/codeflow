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
    .js('resources/js/ajaxchimp.min.js', 'public/js/ajaxchimp.min.js')
    .js('resources/js/animated-headline.js', 'public/js/animated-headline.js')
    .js('resources/js/contact.js', 'public/js/contact.js')
    .js('resources/js/gijgo.min.js', 'public/js/gijgo.min.js')
    .js('resources/js/hover-direction-snake.min.js', 'public/js/hover-direction-snake.min.js')
    .js('resources/js/jquery.barfiller.js', 'public/js/jquery.barfiller.js')
    .js('resources/js/jquery.counterdown.min.js', 'public/js/jquery.counterdown.min.js')
    .js('resources/js/jquery.counterup.min.js', 'public/js/jquery.counterup.min.js')
    .js('resources/js/jquery.form.js', 'public/js/jquery.form.js')
    .js('resources/js/jquery.magnific-popup.js', 'public/js/jquery.magnific-popup.js')
    .js('resources/js/jquery.min.js', 'public/js/jquery.min.js')
    .js('resources/js/jquery.nice-select.min.js', 'public/js/jquery.nice-select.min.js')
    .js('resources/js/jquery.slicknav.min.js', 'public/js/jquery.slicknav.min.js')
    .js('resources/js/jquery.sticky.js', 'public/js/jquery.sticky.js')
    .js('resources/js/jquery.validate.min.js', 'public/js/jquery.validate.min.js')
    .js('resources/js/mail-script.js', 'public/js/mail-script.js')
    .js('resources/js/main.js', 'public/js/main.js')
    .js('resources/js/modernizr.min.js', 'public/js/modernizr.min.js')
    .js('resources/js/owl.carousel.min.js', 'public/js/owl.carousel.min.js')
    .js('resources/js/plugins.js', 'public/js/plugins.js')
    .js('resources/js/popper.min.js', 'public/js/ajaxchimp.min.js')
    .js('resources/js/slick.min.js', 'public/js/slick.min.js')
    .js('resources/js/waypoints.min.js', 'public/js/waypoints.min.js')
    .js('resources/js/wow.min.js', 'public/js/wow.min.js')
    .sass('resources/sass/app.scss', 'public/css/app.scss')
    .styles('resources/css/owl.carousel.min.css','public/css/owl.carousel.min.css')
    .styles('resources/css/slicknav.css','public/css/slicknav.css')
    .styles('resources/css/flaticon.css','public/css/flaticon.css')
    .styles('resources/css/progressbar_barfiller.css','public/css/progressbar_barfiller.css')
    .styles('resources/css/gijgo.css','public/css/gijgo.css')
    .styles('resources/css/animate.min.css','public/css/animate.min.css')
    .styles('resources/css/animated-headline.css','public/css/animated-headline.css')
    .styles('resources/css/magnific-popup.css','public/css/magnific-popup.css')
    .styles('resources/css/themify-icons.css','public/css/themify-icons.css')
    .styles('resources/css/slick.css','public/css/slick.css')
    .styles('resources/css/nice-select.css','public/css/nice-select.css')
    .styles('resources/css/style.css','public/css/style.css')
    .styles('node_modules/bootstrap/dist/css/bootstrap.css', 'public/css/bootstrap.css')
    .styles('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css')
    .styles('node_modules/sweetalert2/dist/sweetalert2.css', 'public/css/sweetalert2/sweetalert2.css')
    .styles('node_modules/sweetalert2/dist/sweetalert2.min.css', 'public/css/sweetalert2/sweetalert2.min.css')
    .scripts(['resources/assets/demo/datatables-demo.js'], 'public/js/assets.js')
    .scripts('node_modules/bootstrap/dist/js/bootstrap.js', 'public/js/bootstrap.js')
    .scripts('node_modules/sweetalert2/dist/sweetalert2.js', 'public/js/sweetalert2/sweetalert2.js')
    .scripts('node_modules/sweetalert2/dist/sweetalert2.min.js', 'public/js/sweetalert2/sweetalert2.min.js')
    .scripts('resources/js/sidebar.js', 'public/js/sidebar.js')
    .sourceMaps();
