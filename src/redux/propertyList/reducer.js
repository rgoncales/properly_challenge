import { combineReducers } from 'redux'
import TYPES from './types'
import { FILTERS } from 'redux/propertyList/constants'

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
  [FILTERS.BATHROOM]: null,
  [FILTERS.BEDROOM]: null,
  [FILTERS.MIN_PRICE]: null,
  maxPrice: null,
  minSqft: null,
}

function selectedFiltersReducer(state = initialFilters, action) {
  switch (action.type) {
    case TYPES.SET_ALL_FILTERS:
      return {
        ...action.payload,
      }
    case TYPES.SET_FILTER:
      return {
        ...state,
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
