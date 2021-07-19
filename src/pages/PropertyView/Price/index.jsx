import React from 'react'
import styled from 'styled-components'
import Typography from 'components/core/Typography'
import { PropertyDetailsType } from 'customTypes'
import formatUtils from 'utils/format'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Price = (props) => {
  return (
    <Wrapper>
      <Typography size="lg" color="accent" weight="500">
        {formatUtils.formatPrice(props.details.price)}
      </Typography>
    </Wrapper>
  )
}

Price.propTypes = {
  details: PropertyDetailsType.isRequired,
}

Price.defaultProps = {}

export default Price
