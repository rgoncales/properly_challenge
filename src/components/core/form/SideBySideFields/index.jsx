import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const LeftField = styled.div`
  flex: 1;
  padding-right: 12px;
`
const RightField = styled.div`
  flex: 1;
  padding-left: 12px;
`

const FilterMenu = (props) => {
  return (
    <Wrapper>
      <LeftField>{props.left}</LeftField>
      <RightField>{props.right}</RightField>
    </Wrapper>
  )
}

FilterMenu.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
}

export default FilterMenu
