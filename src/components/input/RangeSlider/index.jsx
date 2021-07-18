import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from 'components/core/Typography'
import formatUtils from 'utils/format'

const Wrapper = styled.div`
  width: 100%;
`

const InputWrapper = styled.div`
  padding: 0 8px;
`

const ValueDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

function valuetext(value) {
  return `$${value}`
}

const TYPES = {
  PRICE: 'price',
  DEFAULT: 'default',
}

const StyledSlider = withStyles({
  root: {
    color: '#b044bd',
  },
})(Slider)

const RangeSlider = (props) => {
  const handleChange = (event, newValue) => {
    props.onChange(newValue)
  }

  const formatLabel = (label) => {
    if (props.type === TYPES.PRICE) {
      return formatUtils.formatPrice(label)
    }
    return label
  }

  return (
    <Wrapper>
      <ValueDisplay>
        <Typography size="sm" color="light">
          {formatLabel(props.value[0])}
        </Typography>
        <Typography size="sm" color="light">
          {formatLabel(props.value[1])}
        </Typography>
      </ValueDisplay>
      <InputWrapper>
        <StyledSlider
          value={props.value}
          onChange={handleChange}
          ara-labelledby="range-slider"
          valueLabelDisplay="off"
          marks={props.marks}
          getAriaValueText={valuetext}
          max={props.max}
          step={props.step}
        />
      </InputWrapper>
    </Wrapper>
  )
}

RangeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  max: PropTypes.number,
  value: PropTypes.arrayOf(PropTypes.string), // [low, high]
  type: PropTypes.oneOf(Object.values(TYPES)),
}

RangeSlider.defaultProps = {
  max: 100,
  step: 1,
  value: [1, 100],
  type: TYPES.DEFAULT,
}
export default RangeSlider
