import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const TextInput = (props) => {
  return <TextField {...props} label={props.label} variant="outlined" />
}

TextInput.propTypes = {
  label: PropTypes.string,
}

TextInput.defaultProps = {
  label: 'NO_LABEL',
}

export default TextInput
