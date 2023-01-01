const {distributeGifts} = require('./index')

describe('Reto 3' , () => {
  it('return number type', () => {
    expect(typeof distributeGifts(['a'], ['b'])).toBe('number')
  })
  it('should return 2 when 2 gifts can be delivered', () => {
    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]
    expect(distributeGifts(packOfGifts, reindeers)).toBe(2)
  })
  it('should return 5 when 5 gifts can be delivered', () => {
    const packOfGifts = ["game", "videoconsole", "computer"]
    const reindeers = ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]
    expect(distributeGifts(packOfGifts, reindeers)).toBe(5)
  })
  it('should return 26 when 26 gifts can be delivered', () => {
    const packOfGifts = ["music"]
    const reindeers = ["midudev", "pheralb", "codingwithdani", "carlosble", "blasco", "facundocapua", "madeval", "memxd"]
    expect(distributeGifts(packOfGifts, reindeers)).toBe(26)
  })
})
