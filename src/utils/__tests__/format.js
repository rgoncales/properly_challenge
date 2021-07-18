import formatUtils from '../format'

describe('formatPrice', () => {
  it('should format millions', () => {
    const value = 1000000
    expect(formatUtils.formatPrice(value)).toBe('$1,000,000.00')
  })
})

describe('formatArea', () => {
  it('should add sqft', () => {
    const value = 100000
    expect(formatUtils.formatArea(value)).toBe('100000 sqft')
  })
})

describe('exactDate', () => {
  it('should return readable date', () => {
    const value = '2021-07-18T04:13:27.213Z'
    expect(formatUtils.exactDate(value)).toBe('Jul 18, 2021')
  })
})
