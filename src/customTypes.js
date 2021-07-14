import PropTypes from 'prop-types'

export const Id = PropTypes.string

export const PropertyDetailsType = PropTypes.shape({
  price: PropTypes.number,
  address: PropTypes.string,
  numOfBedrooms: PropTypes.number,
  numOfBathrooms: PropTypes.number,
  size: PropTypes.number,
  maintenanceCost: PropTypes.number,
  listedOn: PropTypes.instanceOf(Date),
  listingAgent: Id.string,
  pictures: PropTypes.arrayOf(PropTypes.string),
  priceHistory: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      soldOn: PropTypes.instanceOf(Date),
      listedOn: PropTypes.instanceOf(Date),
    }),
  ),
})
