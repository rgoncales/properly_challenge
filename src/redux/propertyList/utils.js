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
}

export default {
  FilterItemList,
}
