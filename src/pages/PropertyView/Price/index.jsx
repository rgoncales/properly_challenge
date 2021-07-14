import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PageContainer from 'components/layout/PageContainer'
import ImageCarousel from 'components/layout/ImageCarousel'
import PropertyDetails from 'pages/PropertyView/Details'
import PropertyPrice from 'pages/PropertyView/Price'
import { selectPropertyDetails } from 'redux/property/selectors'
import { PropertyDetailsType } from 'customTypes'
import Card from 'components/core/Card'

const NavBar = (props) => {
  return <Card>PRICE</Card>
}

const mapStateToProps = (state) => {
  return {
    details: selectPropertyDetails(state),
  }
}

NavBar.propTypes = {
  details: PropertyDetailsType.isRequired,
}

NavBar.defaultProps = {}

export default connect(mapStateToProps)(NavBar)
