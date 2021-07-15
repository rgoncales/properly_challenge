import { combineReducers } from 'redux'
import TYPES from './types'

const initialState = []

function listReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_PROPERTY_LIST_SUCCESS:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

export default combineReducers({
  list: listReducer,
})
