var baseArray = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]



/*  ------------- Merge Sort (Div&Conq) ----------------- */


function mergeSort(array) {
  if (array.length === 1) return array

  const mid = Math.floor(array.length / 2)

  const left = array.slice(0, mid)
  const right = array.slice(mid)
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

/*  ------------- Merge Sort ----------------- */


