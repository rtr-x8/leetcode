/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let r = parseInt(String(Math.abs(x)).split("").reverse().join(""));
  r = x < 0 ? r * -1 : r;
  return (-1 * (2 ** 31) > r || r > 2 ** 31 - 1) ? 0 : r;
};
// @lc code=end

