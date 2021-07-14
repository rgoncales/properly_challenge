import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const COLORS = {
  LIGHT: 'light',
  DEFAULT: 'default',
  DARK: 'dark',
}

const SIZE = {
  LARGE: 'lg',
  DEFAULT: 'default',
  SMALL: 'sm',
}

const Styled = styled.span`
  color: ${(props) => {
    switch (props.color) {
      case COLORS.LIGHT:
        return '#696969'
      case COLORS.DARK:
        return '#333333'
      case COLORS.DEFAULT:
      default:
        return '#4f4f4f'
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case SIZE.SMALL:
        return '14px'
      case SIZE.LARGE:
        return '24px'
      case COLORS.DEFAULT:
      default:
        return '16px;'
    }
  }};
  font-weight: ${(props) => {
    return props.weight
  }};
`

const Typography = (props) => {
  return (
    <Styled color={props.color} size={props.size} weight={props.weight}>
      {props.children}
    </Styled>
  )
}

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
}

Typography.defaultProps = {
  color: COLORS.DARK,
  size: SIZE.DEFAULT,
  weight: '400',
}

export default Typography
