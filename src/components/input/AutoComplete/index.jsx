import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextInput from 'components/input/Text'

const AutoCompleteInput = (props) => {
  const onChange = (e, newValue) => {
    props.onChange(newValue)
  }
  return (
    <Autocomplete
      id="disabled-options-demo"
      options={props.options}
      onChange={onChange}
      renderInput={(params) => (
        <TextInput {...params} label={props.label} variant="outlined" />
      )}
    />
  )
}

AutoCompleteInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

AutoCompleteInput.defaultProps = {}

export default AutoCompleteInput
