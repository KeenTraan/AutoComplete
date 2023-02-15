const { defineConfig } = require('@vue/cli-service')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true
})
