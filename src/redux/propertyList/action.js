import propertyData from 'data/properties'
import TYPES from './types'

export function getPropertyList() {
  return (dispatch) => {
    dispatch({
      type: TYPES.GET_PROPERTY_LIST,
    })
    try {
      setTimeout(() => {
        dispatch({
          type: TYPES.GET_PROPERTY_LIST_SUCCESS,
          payload: [...propertyData.list],
        })
      }, 2000)
    } catch (error) {
      dispatch({
        type: TYPES.GET_PROPERTY_LIST_FAILURE,
        error,
      })
    }
  }
}
