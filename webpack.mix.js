const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .options({
       processCssUrls: false,
       postCss: [require('tailwindcss')],
   })
   .copyDirectory('resources/images', 'public/images')
   .copyDirectory('resources/fonts', 'public/fonts');  

   mix.disableNotifications();