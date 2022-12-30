const { wrapping } = require('./index')

describe('Reto 1', () => {
  it('provided example', () => {
    const gifts = ['cat', 'game', 'socks']
    const wrapped = wrapping(gifts)

    expect(wrapped).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******"
    ])
  });
});
