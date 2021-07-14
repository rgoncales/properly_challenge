import React from 'react'
import PropTypes from 'prop-types'
import PageContainer from 'components/layout/PageContainer'
import styled from 'styled-components'
import ImageCarousel from 'components/layout/ImageCarousel'

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

const NavBar = () => {
  return (
    <PageContainer>
      <ImageContainer>
        <ImageCarousel
          imageList={[
            'https://media.fromthegrapevine.com/assets/images/2015/3/hobbit-house.jpg.480x0_q71_crop-scale.jpg',
            'https://media.fromthegrapevine.com/assets/images/2015/3/hobbit-house.jpg.480x0_q71_crop-scale.jpg',
            'https://media.fromthegrapevine.com/assets/images/2015/3/hobbit-house.jpg.480x0_q71_crop-scale.jpg',
          ]}
        />
      </ImageContainer>
      <DetailsContainer />
      <RelatedPropertiesContainer />
    </PageContainer>
  )
}

NavBar.propTypes = {}

NavBar.defaultProps = {}

export default NavBar
