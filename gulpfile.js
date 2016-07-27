var elixir = require('laravel-elixir')

elixir(function(mix) {
    mix.sass("app.scss")
    mix.copy("src/**/*.html", "build")
})