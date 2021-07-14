import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const NavBar = () => {
  const renderNode = (content) => {
    return <div className="navbar__node">{content}</div>
  }
  return (
    <div className="navbar">
      <div className="navbar__inner">
        {renderNode(<div className="navbar__logo">Property'R'Us</div>)}
        {renderNode(<div className="navbar__profile"></div>)}
      </div>
    </div>
  )
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
