import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getPropertyList } from 'redux/propertyList/action'
import { selectFilteredPropertyList } from 'redux/propertyList/selectors'
import PropertyCard from 'components/property/Card'

const List = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
`

const PropertyList = (props) => {
  if (!props.propertyList.length) {
    return null
  }
  return (
    <List>
      {props.propertyList.map((property) => {
        return <PropertyCard property={property}></PropertyCard>
      })}
    </List>
  )
}

const mapStateToProps = (state) => {
  return {
    propertyList: selectFilteredPropertyList(state),
  }
}

PropertyList.propTypes = {
  getPropertyList: PropTypes.func.isRequired,
}

PropertyList.defaultProps = {}

export default connect(mapStateToProps, { getPropertyList })(PropertyList)
