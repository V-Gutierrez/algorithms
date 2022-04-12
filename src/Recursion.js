/* ---------- MEMOIZATION STRATEGY -------------- */

const hardCache = {}

function memoize(fn, param) {
  if (hardCache[param]) {
    return hardCache[param]
  } else {
    hardCache[param] = fn(param)
    return fn(param)
  }
}

/* ---------- MEMOIZATION STRATEGY -------------- */


function fatorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * memoize(fatorial, n - 1)
  }
}


/* ---------- RECURSION STRATEGY -------------- */


function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return memoize(fibonacci, (n - 1)) + memoize(fibonacci, (n - 2))
  }
}


/* ---------- RECURSION STRATEGY -------------- */
