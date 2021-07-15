import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from 'components/core/Card'
import { getPropertyList } from 'redux/propertyList/action'
import { selectPropertyList } from 'redux/propertyList/selectors'
import PageContainer from 'components/layout/PageContainer'

const PropertyView = (props) => {
  useEffect(() => {
    props.getPropertyList()
  }, [])

  const renderList = () => {
    if (!props.propertyList.length) {
      return null
    }
    return props.propertyList.map((property) => {
      return <Card>{property.address}</Card>
    })
  }

  return (
    <PageContainer>
      <div onClick={() => console.log(props.propertyList)}>test</div>
      {renderList()}
    </PageContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    propertyList: selectPropertyList(state),
  }
}

PropertyView.propTypes = {
  getPropertyList: PropTypes.func.isRequired,
}

PropertyView.defaultProps = {}

export default connect(mapStateToProps, { getPropertyList })(PropertyView)
