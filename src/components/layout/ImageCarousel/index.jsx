import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*
 * use some library to display a carousel
 * added some mock code for now
 */
const CarouselWrapper = styled.div`
  margin: -4px;
`

const Carousel = styled.div`
  display: flex;
  align-items: center;
`

const CarouselItem = styled.div`
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 5px;
  margin: 4px;
`

const ImageCarousel = (props) => {
  const renderImages = () => {
    if (!props.imageList.length) {
      return <div> No Images </div>
    }
    return props.imageList.map((url, index) => {
      return (
        <CarouselItem key={`carousel-img-${index}`}>
          <img src={url} alt="house-pic" />
        </CarouselItem>
      )
    })
  }
  return (
    <CarouselWrapper>
      <Carousel>{renderImages()}</Carousel>
    </CarouselWrapper>
  )
}

ImageCarousel.propTypes = {
  imageList: PropTypes.arrayOf(PropTypes.string),
}

ImageCarousel.defaultProps = {
  imageList: [],
}

export default ImageCarousel
