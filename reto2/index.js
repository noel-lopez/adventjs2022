function countHours(year, holidays) {
  return holidays
    .filter(diaMes => new Date(diaMes + '/' + year).getDay() % 6) // returns 0 (false) for Saturday/Sunday and 1 (true) for weekdays
    .length * 2
}

module.exports = { countHours }