import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './_index.scss'

const NavBar = () => {
  const renderNode = (content) => {
    return <div className="navbar__node">{content}</div>
  }
  return (
    <div className="navbar">
      <div className="navbar__inner">
        {renderNode(
          <Link to="/" className="navbar__logo">
            Property'R'Us
          </Link>,
        )}
        {renderNode(<div className="navbar__profile"></div>)}
      </div>
    </div>
  )
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
