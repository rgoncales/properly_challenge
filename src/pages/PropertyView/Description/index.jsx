import React from 'react'
import styled from 'styled-components'
import { PropertyDetailsType } from 'customTypes'
import Typography from 'components/core/Typography'

const Title = styled.div`
  margin-bottom: 8px;
`

const Description = (props) => {
  return (
    <>
      <Title>
        <Typography color="dark" size="lg" weight="500">
          Description
        </Typography>
      </Title>
      <Typography color="dark">{props.details.description}</Typography>
    </>
  )
}

Description.propTypes = {
  details: PropertyDetailsType.isRequired,
}

Description.defaultProps = {}

export default Description
