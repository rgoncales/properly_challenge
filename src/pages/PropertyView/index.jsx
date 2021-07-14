import React from 'react'
import PropTypes from 'prop-types'

const NavBar = () => {
  const renderNode = (content) => {
    return <div className="navbar__node">{content}</div>
  }
  return <div className="navbar">Hello World</div>
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
