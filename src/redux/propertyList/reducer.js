import { combineReducers } from 'redux'
import TYPES from './types'

const initialList = []

function listReducer(state = initialList, action) {
  switch (action.type) {
    case TYPES.GET_PROPERTY_LIST_SUCCESS:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

const initialFilters = {
  bathroomCount: null,
  bedroomCount: null,
  minPrice: null,
  maxPrice: null,
  minSqft: null,
}

function selectedFiltersReducer(state = initialFilters, action) {
  switch (action.type) {
    case TYPES.SET_FILTERS:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

export default combineReducers({
  list: listReducer,
  filters: selectedFiltersReducer,
})
