/*
 * @lc app=leetcode id=1281 lang=javascript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let x = n.toString().split("");
  let sum = 0;
  let prod = 1;
  for (let i = 0; i < x.length; i++) {
    sum += parseInt(x[i]);
    prod *= parseInt(x[i]);
  }
  return prod - sum
};
// @lc code=end

