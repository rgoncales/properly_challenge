import { createStore, combineReducers } from 'redux'
import property from 'redux/property/reducer'

const combinedReducers = combineReducers({
  property,
})

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
export default store
