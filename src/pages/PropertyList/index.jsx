import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getPropertyList } from 'redux/propertyList/action'
import { selectPropertyList } from 'redux/propertyList/selectors'
import PageContainer from 'components/layout/PageContainer'

const PropertyView = (props) => {
  useEffect(() => {
    props.getPropertyList()
  }, [])

  return (
    <PageContainer>
      <div onClick={() => console.log(props.propertyList)}>test</div>
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
