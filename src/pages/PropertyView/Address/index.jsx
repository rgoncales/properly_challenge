import React from 'react'
import styled from 'styled-components'
import { PropertyDetailsType } from 'customTypes'
import Typography from 'components/core/Typography'

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`

const StreetAddress = styled.div`
  margin-right: 8px;
`

const Address = (props) => {
  const renderAddress = () => {
    const { city, state, postalCode } = props.details
    return `${city}, ${state} ${postalCode}`
  }
  return (
    <Wrapper>
      <StreetAddress>
        <Typography color="dark" size="lg" weight="600">
          {props.details.address}
        </Typography>
      </StreetAddress>
      <Typography color="default" size="md" weight="500">
        {renderAddress()}
      </Typography>
    </Wrapper>
  )
}

Address.propTypes = {
  details: PropertyDetailsType.isRequired,
}

Address.defaultProps = {}

export default Address
