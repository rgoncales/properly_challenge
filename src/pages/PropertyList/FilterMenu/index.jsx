import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import formatUtils from 'utils/format'
import AutoComplete from 'components/input/AutoComplete'
import RangeSlider from 'components/input/RangeSlider'
import {
  setListFilters,
  setBathroomFilter,
  setBedroomFilter,
  setPriceRangeFilter,
} from 'redux/propertyList/action'

const OPTIONS = {
  bathroomCount: ['1', '2', '3', '4', '5'],
  bedroomCount: ['1', '2', '3', '4'],
}

const FilterMenu = (props) => {
  const formatValue = (value) => {
    let intValue = value
    if (intValue !== null && typeof value === 'string') {
      intValue = parseInt(intValue)
    }
    return intValue
  }

  return (
    <div>
      <div onClick={() => console.log(props.selectedFilters)}>test</div>
      <AutoComplete
        options={OPTIONS.bathroomCount}
        label="Bathrooms"
        onChange={(value) => props.setBathroomFilter(formatValue(value))}
      />
      <AutoComplete
        options={OPTIONS.bedroomCount}
        label="Bedrooms"
        onChange={(value) => props.setBedroomFilter(formatValue(value))}
      />
      <RangeSlider
        max={1000000}
        step={50000}
        value={[props.selectedFilters.minPrice, props.selectedFilters.maxPrice]}
        onChange={(value) => {
          console.log(value)
          props.setPriceRangeFilter({ min: value[0], max: value[1] })
        }}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedFilters: state.propertyList.filters,
  }
}

FilterMenu.propTypes = {}

FilterMenu.defaultProps = {}

export default connect(mapStateToProps, {
  setListFilters,
  setBedroomFilter,
  setBathroomFilter,
  setPriceRangeFilter,
})(FilterMenu)
