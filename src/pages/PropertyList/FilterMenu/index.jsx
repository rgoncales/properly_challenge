import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AutoComplete from 'components/input/AutoComplete'
import RangeSlider from 'components/input/RangeSlider'
import {
  setListFilters,
  setBathroomFilter,
  setBedroomFilter,
  setPriceRangeFilter,
  setFootageRangeFilter,
} from 'redux/propertyList/action'
import Field from 'components/core/form/Field'
import SideBySideFields from 'components/core/form/SideBySideFields'
import Card from 'components/core/Card'
import CardContent from 'components/core/Card/Content'

const OPTIONS = {
  bathroomCount: ['1', '2', '3', '4', '5'],
  bedroomCount: ['1', '2', '3', '4'],
  maxPrice: 1000000,
  priceStep: 50000,
  maxFootage: 4000,
  footageStep: 50,
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
    <Card title="Filters">
      <CardContent>
        <SideBySideFields
          left={
            <Field label="Bedrooms">
              <AutoComplete
                options={OPTIONS.bedroomCount}
                placeholder="N/A"
                onChange={(value) => props.setBedroomFilter(formatValue(value))}
              />
            </Field>
          }
          right={
            <Field label="Bathrooms">
              <AutoComplete
                options={OPTIONS.bathroomCount}
                placeholder="N/A"
                onChange={(value) =>
                  props.setBathroomFilter(formatValue(value))
                }
              />
            </Field>
          }
        />
        <SideBySideFields
          left={
            <Field label="Price">
              <RangeSlider
                max={OPTIONS.maxPrice}
                step={OPTIONS.priceStep}
                value={[
                  props.selectedFilters.minPrice,
                  props.selectedFilters.maxPrice,
                ]}
                marks
                onChange={(value) => {
                  props.setPriceRangeFilter({ min: value[0], max: value[1] })
                }}
              />
            </Field>
          }
          right={
            <Field label="Internal Sqft">
              <RangeSlider
                max={OPTIONS.maxFootage}
                step={OPTIONS.footageStep}
                value={[
                  props.selectedFilters.minFootage,
                  props.selectedFilters.maxFootage,
                ]}
                onChange={(value) => {
                  props.setFootageRangeFilter({ min: value[0], max: value[1] })
                }}
              />
            </Field>
          }
        />
      </CardContent>
    </Card>
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
  setFootageRangeFilter,
})(FilterMenu)
