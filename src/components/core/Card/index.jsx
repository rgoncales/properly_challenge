import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'components/core/Typography'
import styled from 'styled-components'

const StyledCard = styled.div`
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  height: 100%;
  cursor: ${(props) => (props.isClickable ? 'pointer' : 'default')};
`

const Title = styled.div`
  padding: 16px 16px 8px;
  word-break: break-word;
`

const Card = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }
  const renderTitle = () => {
    if (!props.title) {
      return null
    }
    return (
      <Title>
        <Typography size="sm" color="light" weight="600">
          {props.title}
        </Typography>
      </Title>
    )
  }
  return (
    <StyledCard isClickable={!!props.onClick} onClick={handleClick}>
      {renderTitle()}
      {props.children}
    </StyledCard>
  )
}

Card.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Card.defaultProps = {
  onClick: null,
  title: '',
}

export default Card
