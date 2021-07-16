import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`

const Menu = styled.div`
  padding: $padding-size-lg $padding-size-sm $padding-size-x-lg;
  width: 280px;
  box-shadow: 1px -1px 2px 0 rgba(0, 0, 0, 0.1);
`
const Content = styled.div`
  flex: 1;
`

const PageContainer = (props) => {
  return (
    <Wrapper>
      <Menu>{props.menu}</Menu>
      <Content>{props.content}</Content>
    </Wrapper>
  )
}

PageContainer.propTypes = {
  content: PropTypes.node.isRequired,
  menu: PropTypes.node.isRequired,
}

PageContainer.defaultProps = {}

export default PageContainer
