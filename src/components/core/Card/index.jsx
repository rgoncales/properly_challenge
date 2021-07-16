import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'components/core/Typography'
import './_index.scss'

const Card = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }
  const renderTitle = () => {
    if (!props.title) {
      return null
    }
    return (
      <div className="card__title">
        <Typography size="sm" color="light" weight="600">
          {props.title}
        </Typography>
      </div>
    )
  }
  return (
    <div className="card" onClick={handleClick}>
      {renderTitle()}
      {props.children}
    </div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Card.defaultProps = {
  title: '',
}

export default Card
