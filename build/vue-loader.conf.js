'use strict'
const utils = require('./utils')
const config = require('../config')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const bourbon = require('bourbon')
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: {
    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src//assets/scss/globals"',
    scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/assets/scss/globals";',
    i18n: '@kazupon/vue-i18n-loader'
  },
  sassLoader: {
    includePaths: bourbon.includePaths
  },
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
