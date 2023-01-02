function getMaxGifts(giftsCities, maxGifts, maxCities) {
  // giftsCities -> array of number of gifts he can leave in each city
  // maxGifts -> number of gifts he can fit in his bag
  // maxCities -> number of cities he can visit
  // if cant leave all the gifts that are from a city, he doesnt leave any
  // return the maximum number of gifts he can leave

  const recursive = (giftsCities, gifts, cities, i) => {
    if (gifts > maxGifts || cities > maxCities) return 0
    if (i === giftsCities.length) return gifts

    const giftsSum = gifts + giftsCities[i]
    const res1 = recursive(giftsCities, giftsSum, cities + 1, i + 1)
    const res2 = recursive(giftsCities, gifts, cities, i + 1)

    return Math.max(res1, res2)
  }

  const res = recursive(giftsCities, 0, 0, 0)
  return res
}

module.exports = getMaxGifts