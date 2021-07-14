import moment from 'moment'

const formatPrice = (value) => {
  const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  return `$${formatted}`
}

const formatArea = (value) => {
  return `${value} sqft`
}

const exactDate = (date) => {
  return moment(date).format('MMM D, YYYY')
}

export default {
  formatPrice,
  formatArea,
  exactDate,
}
