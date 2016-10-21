const h = require('react-hyperscript')
const React = require('react')
const xhr = require('xhr')

const Card = require('./shared/Card')

const Youtube = React.createClass({
  search(q, count) {
    xhr({
      method: 'GET',
      json: true,
      url: `http://utube.how2js.com/?code=codeisfun&q=${'javascript ' + this.state.q}&maxResults=${count}`
    }, (e, r, b) => {
      if (e) return console.log(e.message)
      return this.setState({
        results: b,
        count: count
      })
    })
  },
  getInitialState() {
    return {
      q: '',
      results: [],
      count: 10
    }
  },
  onChange(e) {
    return this.setState({
      q: e.target.value
    })
  },
  onSubmit(e) {
    e.preventDefault()
    this.search(this.state.q, this.state.count)
  },
  handleClick() {
    const count = this.state.count + 10
    this.search(this.state.q, count)
  },
  render: function () {
    function video(v) {
      return h(Card, { id: v.id, title: v.title, img: v.thumbnails.high.url, description: v.description })
    }

    return (
      h('div.pa4.bg-black-80', [
        h('h1', {
          style: {
            color: 'peru'
          }
        }, "Tom's JS Search"),
        h('p.gray', "Welcome to Tom's JS Search, this search only includes javascript videos"),
        h('form', {
          onSubmit: this.onSubmit
        }, [
          h('input', {
            onChange: this.onChange
          })
        ]),
        h('div.results.cf.w-100.pa2-ns', this.state.results.map(video)),
        h('button', {
          className: `${this.state.results.length > 0 ? 'db' : 'dn'}`,
          onClick: this.handleClick
        }, 'More Results')

      ])
    )
  }
})

module.exports = Youtube
