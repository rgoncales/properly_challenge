import React from 'react'
import PropTypes from 'prop-types'
import './_index.scss'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__body">{props.children}</div>
    </div>
  )
}

Card.propTypes = {}

Card.defaultProps = {}

export default Card
