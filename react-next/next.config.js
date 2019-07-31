//单一写法
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS()


// 结合css和sass
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = {
    webpack(config, ...args){
      
      config = withCSS().webpack(config, ...args);
      config = withSass().webpack(config, ...args);

      return config;
    }
}