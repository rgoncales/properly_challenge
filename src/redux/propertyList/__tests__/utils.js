import { FILTERS } from 'redux/propertyList/constants'
import factory from 'utils/factory'
import utils from '../utils'

const default_filter = {
  [FILTERS.BATHROOM]: null,
  [FILTERS.BEDROOM]: null,
  [FILTERS.MIN_PRICE]: 0,
  [FILTERS.MAX_PRICE]: 1000000,
  [FILTERS.MIN_FOOTAGE]: 0,
  [FILTERS.MAX_FOOTAGE]: 4000,
}

describe('filter property list', () => {
  it('should return normal list', () => {
    const list = [
      new factory.Property('1'),
      new factory.Property('2'),
      new factory.Property('3'),
    ]
    const filteredList = new utils.FilterItemList(list, default_filter)
    expect(filteredList.length).toBe(list.length)
  })
  it('should filter by exact bathrooms', () => {
    const list = [
      new factory.Property('1').hasBathrooms(1),
      new factory.Property('2').hasBathrooms(0),
      new factory.Property('3').hasBathrooms(2),
    ]
    const filter = { ...default_filter, [FILTERS.BATHROOM]: 1 }
    const filteredList = new utils.FilterItemList(list, filter)
    expect(filteredList.length).toBe(1)
  })
  it('should filter by exact bedrooms', () => {
    const list = [
      new factory.Property('1').hasBedrooms(1),
      new factory.Property('2').hasBedrooms(0),
      new factory.Property('3').hasBedrooms(2),
    ]
    const filter = { ...default_filter, [FILTERS.BEDROOM]: 1 }
    const filteredList = new utils.FilterItemList(list, filter)
    expect(filteredList.length).toBe(1)
  })
  it('should filter by price range', () => {
    const list = [
      new factory.Property('1').hasPrice(10000),
      new factory.Property('2').hasPrice(8999),
      new factory.Property('3').hasPrice(12001),
      new factory.Property('4').hasPrice(0),
      new factory.Property('5').hasPrice(1000000),
    ]
    const filter = {
      ...default_filter,
      [FILTERS.MIN_PRICE]: 9000,
      [FILTERS.MAX_PRICE]: 12000,
    }
    const filteredList = new utils.FilterItemList(list, filter)
    expect(filteredList.length).toBe(1)
  })
  it('should filter by sq ft range', () => {
    const list = [
      new factory.Property('1').hasSize(10000),
      new factory.Property('2').hasSize(8999),
      new factory.Property('3').hasSize(12001),
      new factory.Property('4').hasSize(0),
      new factory.Property('5').hasSize(1000000),
    ]
    const filter = {
      ...default_filter,
      [FILTERS.MIN_FOOTAGE]: 9000,
      [FILTERS.MAX_FOOTAGE]: 12000,
    }
    const filteredList = new utils.FilterItemList(list, filter)
    expect(filteredList.length).toBe(1)
  })
})
