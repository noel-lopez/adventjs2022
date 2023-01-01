const fitsInOneBox = require('./index')
describe('Reto 4', () => {
  test('return type boolean', () => {
    expect(typeof fitsInOneBox([{ l: 1, w: 1, h: 1 }])).toBe('boolean')
  })
  test('test 2', () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ])).toBe(false)
  })
  test('test 3', () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ])).toBe(true)
  })
  test('test 4', () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ])).toBe(false)
  })
  test('test 5', () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2}
    ])).toBe(false)
  })
  test('test 6', () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])).toBe(true)
  })
})