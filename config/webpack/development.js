process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()



module.exports = {
  // ...
  module: {
    ///cuem cuem/ type: "module",
    rules: [
      {
      // cuem  type: "module",
     test: /\.scss$/,
     use: ["style-loader", "css-loader", "sass-loader"]
    },
    // ...
   ]
  }
 };
