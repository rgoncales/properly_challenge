import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WithSideBar = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 1;
`

const SideBar = styled.div`
  width: 33%;
  margin-left: 64px;
`

const WithRightSideBar = (props) => {
  return (
    <WithSideBar>
      <Main>{props.main}</Main>
      <SideBar>{props.sidebar}</SideBar>
    </WithSideBar>
  )
}

WithRightSideBar.propTypes = {
  main: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
}

WithRightSideBar.defaultProps = {}

export default WithRightSideBar
