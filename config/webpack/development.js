process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()



module.exports = {
  // ...
  module: {
   rules: [
    {
     test: /\.scss$/,
     use: ["style-loader", "css-loader", "sass-loader"]
    },
    // ...
   ]
  }
 };
