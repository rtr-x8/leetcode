/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x > 0)) return false;
  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = parseInt(x / 10);
    console.log(x, revertedNumber)
  }
  return x === parseInt(revertedNumber / 10) || x === revertedNumber;
};
// @lc code=end

