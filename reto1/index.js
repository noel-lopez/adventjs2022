const wrapping = (gifts) => {
  return gifts.map(gift => {
    const length = gift.length + 2
    const line = '*'.repeat(length)
    return `${line}\n*${gift}*\n${line}`
  })
}

module.exports = { wrapping }