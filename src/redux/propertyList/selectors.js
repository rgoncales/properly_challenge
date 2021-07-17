import localUtils from 'redux/propertyList/utils'

export const selectPropertyFilters = (state) => {
  return state.propertyList.filters
}

export const selectFilteredPropertyList = (state) => {
  const filters = selectPropertyFilters(state)
  const list = Object.values(state.propertyList.list)
  const filteredList = new localUtils.FilterItemList(list, filters)
  return filteredList
}
