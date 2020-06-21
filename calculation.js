function sumAll(nums) {
  let total = 0

  while (nums.length) {
    total += nums.pop() // note to self, += adds value to the existing variable
  }

  return total
}
module.exports = sumAll
