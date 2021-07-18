import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

function valuetext(value) {
  return `$${value}`
}

const RangeSlider = (props) => {
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    props.onChange(newValue)
  }

  return (
    <div className={classes.root}>
      <Slider
        value={props.value}
        onChange={handleChange}
        ara-labelledby="range-slider"
        valueLabelDisplay="off"
        marks
        getAriaValueText={valuetext}
        max={props.max}
        step={props.step}
      />
    </div>
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
