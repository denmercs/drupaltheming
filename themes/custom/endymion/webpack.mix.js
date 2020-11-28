let mix = require("laravel-mix");

mix.sass("sass/style.scss", "css/");
mix.js("lib/*.js", "js/");
mix.options({
  processCssUrls: false,
});
// mix.browserSync({
//   proxy: "localhost:8888",
//   injectChanges: false,
//   files: ["themes/custom/endymion", { match: ["themes/custom/endymion"] }],
// });
