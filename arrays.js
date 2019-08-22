var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArr = [element,...array]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArr = [...array, element]
  return newArr
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift(1)
   return array
}

function removeElementFromBeginningOfArray(array) {
  var newArr = array.slice(1)
  return newArr 
}
