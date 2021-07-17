import propertyData from 'data/properties'
import { FILTERS } from 'redux/propertyList/constants'
import TYPES from './types'

export function getPropertyList() {
  return (dispatch) => {
    dispatch({
      type: TYPES.GET_PROPERTY_LIST,
    })
    try {
      // pretend this is a server response
      const map = propertyData.list.reduce((acc, property) => {
        acc[property._id] = { ...property }
        return acc
      }, {})
      dispatch({
        type: TYPES.GET_PROPERTY_LIST_SUCCESS,
        payload: map,
      })
    } catch (error) {
      dispatch({
        type: TYPES.GET_PROPERTY_LIST_FAILURE,
        error,
      })
    }
  }
}

export function setListFilters(filters) {
  return { type: TYPES.SET_ALL_FILTERS, payload: filters }
}

export function setBathroomFilter(value) {
  return { type: TYPES.SET_FILTER, payload: { [FILTERS.BATHROOM]: value } }
}

export function setBedroomFilter(value) {
  return { type: TYPES.SET_FILTER, payload: { [FILTERS.BEDROOM]: value } }
}
