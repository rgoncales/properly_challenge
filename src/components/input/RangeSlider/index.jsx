import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 8px;
`

function valuetext(value) {
  return `$${value}`
}

const RangeSlider = (props) => {
  const handleChange = (event, newValue) => {
    props.onChange(newValue)
  }

  return (
    <Wrapper>
      <Slider
        value={props.value}
        onChange={handleChange}
        ara-labelledby="range-slider"
        valueLabelDisplay="off"
        marks={props.marks}
        getAriaValueText={valuetext}
        max={props.max}
        step={props.step}
      />
    </Wrapper>
  )
}

RangeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  max: PropTypes.number,
  value: PropTypes.arrayOf(PropTypes.string), // [low, high]
}

RangeSlider.defaultProps = {
  max: 100,
  step: 1,
  value: [1, 100],
}
export default RangeSlider
