const withPWA = require('next-pwa')({
  dest: 'public',
register:true,
  disable:process.env.NODE_ENV === "development",
  fallbacks: {
    image: '/static/images/fallback.png'
    // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  }
})

module.exports = withPWA({
  images: {
    domains: ['source.unsplash.com']
  }
})
