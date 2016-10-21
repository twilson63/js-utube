const h = require('react-hyperscript')
const {
  Link
} = require('react-router')

const YoutubeDetail = props => h('div', [
  h('h1', ['YouTube - Details']),
  h(Link, {
    to: '/',
    className: 'link'
  }, 'Home')
])

module.exports = YoutubeDetail
