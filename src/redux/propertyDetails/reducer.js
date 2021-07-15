import { combineReducers } from 'redux'
import propertyData from 'data/properties'
import TYPES from './types'

const initialState = {
  ...propertyData.list[0],
}

function propertyDetails(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_PROPERTY:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

export default combineReducers({
  details: propertyDetails,
})
