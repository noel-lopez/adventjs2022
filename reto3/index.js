function distributeGifts(packOfGifts, reindeers) {
  const allGiftsWeight = packOfGifts.reduce(
    (acc, gift) => acc + gift.length, 0)
  const allReindeersWeight = reindeers.reduce(
    (acc, reindeer) => acc + reindeer.length * 2, 0)
  return Math.floor(allReindeersWeight / allGiftsWeight)
}

module.exports = { distributeGifts }