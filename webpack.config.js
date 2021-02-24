const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.json' // Resuelve las extensiones con la que vamos a trabajar
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Extensiones que vamos a transformar
        exclude: /node_modules/, // Excluimos la carpeta node_modules
        use: {
          loader: 'babel-loader', // Usar babel para que interprete nuestro codigo y pueda usarse en cualquier navegador
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new WebpackPwaManifest({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram 🐶',
      description: 'Mi grandioso App de animales domésticos!',
      background_color: '#ffffff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve(__dirname, 'src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          ios: true
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: 'https://(res.cloudinary.com|images.unsplash.com)',
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: 'https://petgram-server-gb-nj4nsiuvm.vercel.app',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  devServer: { // Configuracion de nuestro servidor
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
    open: true,
    historyApiFallback: {
      disableDotRule: true
    }
  }
}
