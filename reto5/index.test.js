const getMaxGifts = require('./index')

describe('Reto 5', () => {
  test('return type number', () => {
    const giftsCities = []
    const maxGifts = 0
    const maxCities = 0
    expect(typeof getMaxGifts(giftsCities, maxGifts, maxCities)).toBe('number')
  })
  // test 2: getMaxGifts([12, 3, 11, 5, 7], 20, 3) -> 20
  test('test 2', () => {
    const giftsCities = [12, 3, 11, 5, 7]
    const maxGifts = 20
    const maxCities = 3
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(20)
  })
  // test 3: getMaxGifts([50], 15, 1) -> 0
  test('test 3', () => {
    const giftsCities = [50]
    const maxGifts = 15
    const maxCities = 1
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(0)
  })
  // test 4: getMaxGifts([50], 100, 1) -> 50
  test('test 4', () => {
    const giftsCities = [50]
    const maxGifts = 100
    const maxCities = 1
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(50)
  })
  // test 5: getMaxGifts([50, 70], 100, 1) -> 70
  test('test 5', () => {
    const giftsCities = [50, 70]
    const maxGifts = 100
    const maxCities = 1
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(70)
  })
  // test 6: getMaxGifts([50, 70, 30], 100, 2) -> 100
  test('test 6', () => {
    const giftsCities = [50, 70, 30]
    const maxGifts = 100
    const maxCities = 2
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(100)
  })
  // test 7: getMaxGifts([50, 70, 30], 100, 3) -> 100
  test('test 7', () => {
    const giftsCities = [50, 70, 30]
    const maxGifts = 100
    const maxCities = 3
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(100)
  })
  // test 8: getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4) -> 100
  test('test 8', () => {
    const giftsCities = [50, 10, 40, 1000, 500, 200]
    const maxGifts = 199
    const maxCities = 4
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(100)
  })
  // test 9: getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000) -> 115
  test('test 9', () => {
    const giftsCities = [50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const maxGifts = 1000
    const maxCities = 1000
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(115)
  })
})