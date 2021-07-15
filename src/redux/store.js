import { createStore, combineReducers, applyMiddleware } from 'redux'
import property from 'redux/propertyDetails/reducer'
import propertyList from 'redux/propertyList/reducer'
import thunk from 'redux-thunk'

const combinedReducers = combineReducers({
  property,
  propertyList,
})

const store = createStore(
  combinedReducers,
  applyMiddleware(thunk),
)
export default store
