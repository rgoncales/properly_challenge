import { combineReducers } from 'redux'

const types = {
  SET_PROPERTY: 'SET_PROPERTY',
}

const initialState = {
  price: 500000,
  address: '123 Elm St.',
  numOfBedrooms: 3,
  numOfBathrooms: 4,
  size: 600,
  maintenanceCost: 750,
  listedOn: new Date(),
  listingAgent: '123asd123asd123asd', //random Id for now
  pictures: [
    'https://media.fromthegrapevine.com/assets/images/2015/3/hobbit-house.jpg.480x0_q71_crop-scale.jpg',
    'https://media.fromthegrapevine.com/assets/images/2015/3/hobbit-house.jpg.480x0_q71_crop-scale.jpg',
    'https://media.fromthegrapevine.com/assets/images/2015/3/hobbit-house.jpg.480x0_q71_crop-scale.jpg',
  ],
  priceHistory: [
    {
      price: 300000,
      soldOn: new Date(),
      listedOn: new Date(),
    },
  ],
}

function propertyDetails(state = initialState, action) {
  switch (action.type) {
    case types.SET_PROPERTY:
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
