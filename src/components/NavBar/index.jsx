import React from 'react'
import PropTypes from 'prop-types'

const NavBar = () => {
  const renderNode = (content) => {
    return <div className="navbar__node">{content}</div>
  }
  return (
    <div className="navbar">
      {renderNode(<div className="navbar__home"></div>)}
      {renderNode(<div className="navbar__search"></div>)}
      {renderNode(<div className="navbar__profiel"></div>)}
    </div>
  )
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
