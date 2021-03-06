import { FILTERS } from 'redux/propertyList/constants'

class FilterItemList {
  constructor(itemList, filter) {
    this.itemList = itemList
    this.filter = filter
    const filteredList = this.filterList()
    return filteredList
  }

  filterList() {
    let list = this.itemList
    if (this.filter[FILTERS.BEDROOM] !== null) {
      list = this.bedrooms(list)
    }
    if (this.filter[FILTERS.BATHROOM] !== null) {
      list = this.bathrooms(list)
    }
    list = this.price(list)
    list = this.footage(list)
    return list
  }

  bedrooms(list) {
    return list.filter((item) => {
      return item.numOfBedrooms === this.filter[FILTERS.BEDROOM]
    })
  }

  bathrooms(list) {
    return list.filter((item) => {
      return item.numOfBathrooms === this.filter[FILTERS.BATHROOM]
    })
  }

  price(list) {
    return list.filter((item) => {
      return (
        item.price >= this.filter[FILTERS.MIN_PRICE] &&
        item.price <= this.filter[FILTERS.MAX_PRICE]
      )
    })
  }

  footage(list) {
    return list.filter((item) => {
      return (
        item.size >= this.filter[FILTERS.MIN_FOOTAGE] &&
        item.size <= this.filter[FILTERS.MAX_FOOTAGE]
      )
    })
  }
}

export default {
  FilterItemList,
}
