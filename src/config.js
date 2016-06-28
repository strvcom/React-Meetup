require('babel-polyfill')
const ip = require('ip')

const environment = {
  development: {
    isProduction: false,
    apiURL: 'http://swapi.co',
    openBrowserAfterBuild: false,
    host: ip.address(),
    apiHost: ip.address()
  },
  production: {
    isProduction: true,
    apiURL: 'https://swapi.co',
    host: process.env.HOST || ip.address(),
    apiHost: process.env.APIHOST || ip.address()
  }
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign({
  port: process.env.PORT,
  app: {
    title: 'STRV Dev Meetup',
    description: '---',
    head: {
      titleTemplate: '---',
      meta: [
        { name: 'description', content: '---' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: '---' },
        { property: 'og:image', content: 'https://---' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: '---' },
        { property: 'og:description', content: '---' },
        { property: 'og:card', content: '---' },
        { property: 'og:site', content: '---' },
        { property: 'og:creator', content: '---' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  }

}, environment)
