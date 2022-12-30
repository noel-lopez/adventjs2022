const {countHours} = require('./index')

describe('Reto 2' , () => {
  it('provided example', () => {
    const year = 2022
    const holidays = ['01/06', '04/01', '12/25'] // format MM/DD
    // 01/06 is January 6, Thursday. Count.
    // 04/01 is April 1, Friday. Count.
    // 12/25 is December 25, Sunday. Do not count.

    // 2 extra hours for each holiday day
    expect(countHours(year, holidays)).toBe(4)
  })
})
