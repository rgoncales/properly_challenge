import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getPropertyList } from 'redux/propertyList/action'
import { selectFilteredPropertyList } from 'redux/propertyList/selectors'
import PropertyCard from 'components/property/Card'
import Typography from 'components/core/Typography'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
const Display = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  background: #f6ecff;
  border: 2px solid #e7c8ff;
  padding: 24px;
`
const Header = styled.div``

const EmptyPlaceholder = (props) => {
  return (
    <Wrapper>
      <Display>
        <Header>
          <Typography weight="500">
            Oops! No properties match your filters.
          </Typography>
        </Header>
        <Typography weight="400">
          Try changing some of your filters around.
        </Typography>
      </Display>
    </Wrapper>
  )
}

export default EmptyPlaceholder
