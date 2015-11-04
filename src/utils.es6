
// Some code taken with gratitiude from the LokiJS project. Thank you Joe Minichino!

export var defaultSort = function (a, b) {
  return (a < b) ? -1 : ((a > b) ? 1 : 0)
}

export var unique_id = function () {
  return `${(Math.random() + 1).toString(36).substr(2)}`
}

export var insertAt = function (array, index, value) {
  array.splice(index, 0, value)
  return array
}

export var removeAt = function (array, index) {
  array.splice(index, 1)
  return array
}

export var replaceAt = function (array, index, value) {
  array[index] = value
  return array
}

export var binarySearch = function (array, value, userFunc) {
  var lo = 0
  var hi = array.length
  var compared
  var mid
  var func = userFunc || defaultSort

  while (lo < hi) {
    mid = ((lo + hi) / 2) | 0
    compared = func(value, array[mid])
    if (compared === 0) {
      return {
        found: true,
        index: mid
      }
    } else if (compared < 0) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }
  return {
    found: false,
    index: hi
  }
}
