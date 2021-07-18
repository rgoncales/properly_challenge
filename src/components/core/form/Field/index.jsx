import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from 'components/core/Typography'

const FieldWrapper = styled.div`
  padding-top: 24px;
`
const FieldTitle = styled.div`
  margin-bottom: 4px;
`
const FieldInput = styled.div``

const Field = (props) => {
  return (
    <FieldWrapper>
      <FieldTitle>
        <Typography weight="500" color="light">
          {props.label}
        </Typography>
      </FieldTitle>
      <FieldInput>{props.children}</FieldInput>
    </FieldWrapper>
  )
}

Field.propTypes = {}

Field.defaultProps = {}

export default Field
