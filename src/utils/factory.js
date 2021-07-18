class Property {
  constructor(id) {
    this._id = id
    this.price = 0
    this.numOfBedrooms = 0
    this.numOfBathrooms = 0
    this.size = 0
  }

  hasPrice(price) {
    this.price = price
    return this
  }

  hasBathrooms(num) {
    this.numOfBathrooms = num
    return this
  }

  hasBedrooms(num) {
    this.numOfBedrooms = num
    return this
  }

  hasSize(num) {
    this.size = num
    return this
  }
}

export default {
  Property,
}
