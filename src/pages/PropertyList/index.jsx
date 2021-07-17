import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getPropertyList } from 'redux/propertyList/action'
import { selectFilteredPropertyList } from 'redux/propertyList/selectors'
import PageContainer from 'components/layout/PageContainer'
import WithSideMenu from 'components/layout/WithSideMenu'
import PropertyCard from 'components/property/Card'
import FilterMenu from 'pages/PropertyList/FilterMenu'

const List = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
`

const PropertyView = (props) => {
  useEffect(() => {
    props.getPropertyList()
  }, [])

  const renderList = () => {
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

  return (
    <PageContainer>
      <WithSideMenu
        menu={<FilterMenu />}
        content={
          <>
            <div onClick={() => console.log(props.propertyList)}>test</div>
            {renderList()}
          </>
        }
      />
    </PageContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    propertyList: selectFilteredPropertyList(state),
  }
}

PropertyView.propTypes = {
  getPropertyList: PropTypes.func.isRequired,
}

PropertyView.defaultProps = {}

export default connect(mapStateToProps, { getPropertyList })(PropertyView)
