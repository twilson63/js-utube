const React = require('react')
const { Link } = require('react-router')
const Card = props => (
  <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img src={props.img}
      className="db bg-center cover aspect-ratio--object"
      alt={props.title} />
    </div>

    <Link to={'/youtube/' + props.id} className="ph2 ph0-ns pb3 link db">
      <h3 className="f5 f4-ns mb0 black-90">{ props.title }</h3>
      <h3 className="f6 f5 fw4 mt2 white-20">{ props.description }</h3>
    </Link>
  </article>
)

module.exports = Card
