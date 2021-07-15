import propertyData from 'data/properties'
import TYPES from './types'

export function getPropertyList() {
  return (dispatch) => {
    dispatch({
      type: TYPES.GET_PROPERTY_LIST,
    })
    try {
      dispatch({
        type: TYPES.GET_PROPERTY_LIST_SUCCESS,
        payload: [...propertyData.list],
      })
    } catch (error) {
      dispatch({
        type: TYPES.GET_PROPERTY_LIST_FAILURE,
        error,
      })
    }
  }
}
