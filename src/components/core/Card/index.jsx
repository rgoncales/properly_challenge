import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'components/core/Typography'
import './_index.scss'

const Card = (props) => {
  const renderTitle = () => {
    if (!props.title) {
      return null
    }
    return (
      <div className="card__title">
        <Typography color="light" weight="600">
          {props.title}
        </Typography>
      </div>
    )
  }
  return (
    <div className="card">
      {renderTitle()}
      <div className="card__body">{props.children}</div>
    </div>
  )
}

Card.propTypes = {}

Card.defaultProps = {}

export default Card
