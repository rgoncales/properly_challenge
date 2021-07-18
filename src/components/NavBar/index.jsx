import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './_index.scss'

const NavNode = (props) => {
  return <div className="navbar__node">{props.children}</div>
}

NavNode.propTypes = {
  children: PropTypes.node.isRequired,
}

// These would be defined somewhere else, but for now its a const
const LOGO = "Property'R'Us"
const PROFILE_PIC =
  'https://cdn.vox-cdn.com/thumbor/OnqCOd14_2wyCsgOo5FQe4hJNns=/0x0:3733x1579/1200x675/filters:focal(1499x515:2095x1111)/cdn.vox-cdn.com/uploads/chorus_image/image/68661007/Lord_of_the_Rings_The_Fellowship_of_the_Ring.mkv_snapshot_00.19.38__2020.11.29_18.16.35_.0.png'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <NavNode>
          <Link to="/" className="navbar__logo">
            {LOGO}
          </Link>
        </NavNode>
        <NavNode>
          <img
            className="navbar__profile"
            src={PROFILE_PIC}
            alt="profile-img"
            onClick={() => alert('Profile management')}
          ></img>
        </NavNode>
      </div>
    </div>
  )
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
