import propertyData from 'data/properties'
import TYPES from './types'

export function getPropertyById({ propertyId }) {
  return (dispatch) => {
    dispatch({
      type: TYPES.GET_PROPERTY,
    })
    try {
      // pretend this is a server response
      const result = propertyData.list.find((property) => {
        return property._id === propertyId
      })
      dispatch({
        type: TYPES.GET_PROPERTY_SUCCESS,
        payload: result,
      })
    } catch (error) {
      dispatch({
        type: TYPES.GET_PROPERTY_FAILURE,
        error,
      })
    }
  }
}
