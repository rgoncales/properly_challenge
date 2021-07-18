import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getPropertyList } from 'redux/propertyList/action'
import PageContainer from 'components/layout/PageContainer'
import FilterMenu from 'pages/PropertyList/FilterMenu'
import ListProperties from 'pages/PropertyList/List'

const WithTopFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FullWidth = styled.div`
  width: 100%;
`

const PropertyListContainer = styled.div`
  margin-top: 36px;
`

const ListPropertiesPage = (props) => {
  useEffect(() => {
    props.getPropertyList()
  }, [])

  return (
    <PageContainer>
      <WithTopFilter>
        <FullWidth>
          <FilterMenu />
        </FullWidth>
        <FullWidth>
          <PropertyListContainer>
            <ListProperties />
          </PropertyListContainer>
        </FullWidth>
      </WithTopFilter>
    </PageContainer>
  )
}

ListPropertiesPage.propTypes = {
  getPropertyList: PropTypes.func.isRequired,
}

ListPropertiesPage.defaultProps = {}

export default connect(null, { getPropertyList })(ListPropertiesPage)
