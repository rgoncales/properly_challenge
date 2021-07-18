import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const TextInput = (props) => {
  return (
    <TextField
      {...props}
      placeholder={props.placeholder}
      label={props.label}
      variant="outlined"
    />
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
}

TextInput.defaultProps = {
  label: null,
}

export default TextInput
