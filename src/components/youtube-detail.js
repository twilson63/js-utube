const React = require('react')
const { Link } = require('react-router')
const YoutubeDetail = props =>
  <div className="w-100">
    <iframe width="100%" height="600px" src={`https://www.youtube.com/embed/${props.params.id}`} frameborder="0" allowfullscreen></iframe>
    <div className="pa4 center">
      <Link className="link center tm3" to="/youtube">New Search</Link>
    </div>
  </div>

module.exports = YoutubeDetail
