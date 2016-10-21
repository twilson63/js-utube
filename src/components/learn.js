const h = require('react-hyperscript')

const Learn = props =>
  h('div.pa4', [
    h('h2', 'React Showtime Challenges'),
    h('p', `These challenges are meant to be fun and engaging and focused on
    learning the basics of React`),
    h('h3', 'Cat Search - Challenge 1'),
    h('pre', `
As a User

*I want* to search or browse cat profiles, by typing the cats name and pressing
enter or clicking a browse all button.

*So that* when my search or browse action completes, I see a kitten picture and
the cats name and city. You can use placekitten.com to attach to a list of
cat names and locations.
    `),
    h('a', {
      href: '#/'
    }, 'Index'),
    h('h3', 'MovieDb Search'),
    h('pre', `
As a User

*I want* to search or browse movies by title or pressing browse all and next.

*API*

GET https://www.omdbapi.com/

query params

* s - search criteria - string
* r - response type ie 'json'

*HINT*

Use *xhr* as your ajax module
    `),
    h('h3', 'Youtube Search'),
    h('pre', `
As a User

*I want* to search or browse videos by title or pressing browse all and next.

*API*

GET http://utube.how2js.com/

query params

* q - search criteria - string
* code - 'codeisfun'
* maxResults - 10

*HINT*

Use *xhr* as your ajax module

You can also pass more options on your query string

https://developers.google.com/youtube/v3/docs/search/list?hl=en


    `),
    h('a', {
      href: '#/'
    }, 'Index')
  ])

module.exports = Learn
