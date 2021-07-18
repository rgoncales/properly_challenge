import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
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
import CollapsibleContent from 'components/core/CollapsibleContent'
import Typography from 'components/core/Typography'

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

  const renderFilters = () => {
    return (
      <CardContent>
        <SideBySideFields
          left={
            <Field label="Bedrooms">
              <AutoComplete
                options={OPTIONS.bedroomCount}
                placeholder="Any"
                onChange={(value) => props.setBedroomFilter(formatValue(value))}
              />
            </Field>
          }
          right={
            <Field label="Bathrooms">
              <AutoComplete
                options={OPTIONS.bathroomCount}
                placeholder="Any"
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
                type="price"
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
                  props.setFootageRangeFilter({
                    min: value[0],
                    max: value[1],
                  })
                }}
              />
            </Field>
          }
        />
      </CardContent>
    )
  }

  return (
    <Card>
      <CollapsibleContent
        title={
          <Typography size="md" color="light" weight="600">
            Filters
          </Typography>
        }
        content={renderFilters()}
        defaultExpanded
      />
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
