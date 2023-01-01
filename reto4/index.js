function fitsInOneBox(boxes) {
  // each box is an object with the measures of length(l), width(w) and height(h)
  // a box fits in another if all the measures of the first box are smaller than the second box
  // the boxes may come in any size order
  // return true if all the boxes fit in one box
  // return false if they don't

  return boxes
    .sort((a, b) => a.l - b.l)
    .every((prev, index) => {
      const box = boxes[index + 1]
      return box
        ? prev.l < box.l && prev.w < box.w && prev.h < box.h
        : true
    })
}

module.exports = fitsInOneBox