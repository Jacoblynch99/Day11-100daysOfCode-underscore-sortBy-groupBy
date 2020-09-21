const _ = require("underscore")

const numArr = [105, 55, 95, 1201, 25, 23]

const sortByFives = (num) => {
  return num % 5 === 0
}

const sortedArr = _.sortBy(numArr, sortByFives) // returns a copy of the list that arranges the list by the specified function. This does not change the original data.

const groupedArr = _.groupBy(numArr, sortByFives) // returns an object with two keys: true and false, any list item that passes the function's test is considered to be true, and anything that fails is considered false. This does not change the original data.

console.log(`Underscore Data:`, sortedArr)
console.log(`Original Data:`, numArr)
console.log(
  `*****************************************************************************************`
)
console.log(`Underscore Data:`, groupedArr)
console.log(`Original Data:`, numArr)
