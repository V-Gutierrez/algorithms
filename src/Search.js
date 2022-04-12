
/*------------------ UTIL------------------------ */

function numArrayGenerator(length) {
  let array = []
  for (let i = 0; i < length; i++) {
    array.push(i + 1)
  }

  return array
}

/*------------------ UTIL------------------------ */


/* ------------ SEARCH -------------------- */

/* When not sortable or not sorted */
function linearSearch(list, value) {
  let finalIndex = -1

  list.forEach((item, index, array) => {
    if (item === value) {
      finalIndex = index
    }
  }
  )

  return finalIndex
}



function binarySearch(sortedList, value) {
  let max = sortedList.length - 1
  let min = 0


  while (min <= max) {
    let guessedIndex = Math.floor((max + min) / 2)

    if (sortedList[guessedIndex] === value) {
      return guessedIndex
    } else {
      if (sortedList[guessedIndex] < value) {
        min = guessedIndex + 1
      } else {
        max = guessedIndex - 1
      }
    }
  }
}

/* ------------ SEARCH -------------------- */
