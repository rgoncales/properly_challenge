import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AutoComplete from 'components/input/AutoComplete'
import { setListFilters } from 'redux/propertyList/action'

const OPTIONS = {
  bathroomCount: ['1', '2', '3', '4', '5'],
  bedroomCount: ['1', '2', '3', '4'],
}

const FilterMenu = (props) => {
  const getCurrentFilters = (newFilter) => {
    return { ...props.selectedFilters, ...newFilter }
  }

  const onChangeFilter = (name, value) => {
    let intValue = value
    if (intValue !== null && typeof value === 'string') {
      intValue = parseInt(intValue)
    }
    const filters = getCurrentFilters({ [name]: intValue })
    props.setListFilters(filters)
  }

  return (
    <div>
      <div onClick={() => console.log(props.selectedFilters)}>test</div>
      <AutoComplete
        options={OPTIONS.bathroomCount}
        label="Bathrooms"
        onChange={(value) => onChangeFilter('bathroomCount', value)}
      />
      <AutoComplete
        options={OPTIONS.bedroomCount}
        label="Bedrooms"
        onChange={(value) => onChangeFilter('bedroomCount', value)}
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

export default connect(mapStateToProps, { setListFilters })(FilterMenu)
