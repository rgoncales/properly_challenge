import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: #b800ce;
  border-color: #b800ce;
  border-radius: 8px;
  font-weight: 600;
  width: 100%;
  border: none;
  padding: 16px 24px;
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  line-height: 16px;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  font-family: inherit;
  letter-spacing: 0.4px;
  position: relative;
  overflow: hidden;
  outline: none;
  border: 1px solid;
`

const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {}

export default Button
