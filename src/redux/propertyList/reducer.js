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
  [FILTERS.MIN_PRICE]: 0,
  [FILTERS.MAX_PRICE]: 1000000,
  [FILTERS.MIN_FOOTAGE]: 0,
  [FILTERS.MAX_FOOTAGE]: 4000,
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
