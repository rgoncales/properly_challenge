import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { PropertyDetailsType } from 'customTypes'
import Card from 'components/core/Card'
import Typography from 'components/core/Typography'
import formatUtils from 'utils/format'

const ImageWrapper = styled.div`
  height: 250px;
  width: 100%;
  background: blue;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const FooterInfo = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PropertyCard = (props) => {
  return (
    <Card
      onClick={() => {
        props.history.push(`/property/${props.property._id}`)
      }}
    >
      <ImageWrapper>
        <Image src={props.property.pictures[0]} />
      </ImageWrapper>
      <FooterInfo>
        <Typography color="default" size="default" weight="500">
          {props.property.address}
        </Typography>
        <Typography color="dark" size="md" weight="500">
          {formatUtils.formatPrice(props.property.price)}
        </Typography>
      </FooterInfo>
    </Card>
  )
}

PropertyCard.propTypes = {
  property: PropertyDetailsType.isRequired,
}

PropertyCard.defaultProps = {}

export default withRouter(PropertyCard)
