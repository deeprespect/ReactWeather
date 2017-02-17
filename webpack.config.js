var webpack = require('webpack');

module.exports =
{
  entry:
  [
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],


  externals:
  {
    jquery: 'jQuery'
  },

   plugins:
   [
     new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
     })
   ],

  output:
  {
    path: __dirname,
    filename: "./public/bundle.js"
  },

  resolve:
  {
    root:__dirname,
    alias:
    {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',

      Weather: 'app/components/Weather.jsx',
        WeatherForm: 'app/components/WeatherForm.jsx',
        WeatherResult: 'app/components/WeatherResult.jsx',
        openWeatherAPI: 'app/api/openWeatherAPI.jsx',

      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },

  module:
  {
    loaders: [{
                loader:'babel',
                query:
                {
                  presets: ['react', 'es2015']

                },

                test:/\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }]
  }

}
