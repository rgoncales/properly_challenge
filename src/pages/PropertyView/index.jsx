import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PageContainer from 'components/layout/PageContainer'
import ImageCarousel from 'components/layout/ImageCarousel'
import { selectPropertyDetails } from 'redux/property/selectors'
import { PropertyDetailsType } from 'customTypes'

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background: yellow;
`

const DetailsContainer = styled.div`
  width: 100%;
  flex: 1;
  background: red;
`

const RelatedPropertiesContainer = styled.div`
  width: 100%;
  background: pink;
`

const NavBar = (props) => {
  return (
    <PageContainer>
      <div onClick={() => console.log(props.details)}> test</div>
      <ImageContainer>
        <ImageCarousel imageList={props.details.pictures} />
      </ImageContainer>
      <DetailsContainer />
      <RelatedPropertiesContainer />
    </PageContainer>
  )
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
