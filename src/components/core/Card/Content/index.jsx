import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.div`
  padding: 4px 16px;
  word-break: break-word;
  padding-bottom: 16px;
`

const CardContent = (props) => {
  return <Styled>{props.children}</Styled>
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardContent
