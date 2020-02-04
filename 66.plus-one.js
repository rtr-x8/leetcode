/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let arr = [];
  for (let i in digits) {
    if (i != digits.length-1) {
      arr.push(digits[i]);
    }else {
      arr.push(digits[i] + 1)
    }
  }
  return arr;
};
// @lc code=end

