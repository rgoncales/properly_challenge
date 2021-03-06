import React from 'react'
import PropTypes from 'prop-types'
import { PropertyDetailsType } from 'customTypes'
import formatUtils from 'utils/format'
import './_index.scss'

const Row = ({ label, value }) => {
  return (
    <tr className="t-row">
      <td className="t-cell t-cell__name">{label}</td>
      <td className="t-cell t-cell__value">{value}</td>
    </tr>
  )
}

Row.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const Details = (props) => {
  const { details } = props
  return (
    <div className="property-details">
      <table className="t-simple-table">
        <tbody>
          <Row label="Bathrooms" value={details.numOfBathrooms} />
          <Row label="Bedrooms" value={details.numOfBedrooms} />
          <Row label="Size" value={formatUtils.formatArea(details.size)} />
          <Row
            label="Maintenance"
            value={formatUtils.formatPrice(details.maintenanceCost)}
          />
          <Row
            label="List Date"
            value={formatUtils.exactDate(details.listedOn)}
          />
        </tbody>
      </table>
    </div>
  )
}

Details.propTypes = {
  details: PropertyDetailsType.isRequired,
}

Details.defaultProps = {}

export default Details
