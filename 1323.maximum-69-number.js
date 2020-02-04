/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let arr = num.toString().split('').map(x => parseInt(x, 10));
  let switchedNum = [num];
  for (let i in arr) {
    let number = arr[i] > 7 ? 6 : 9;
    let tmp_arr = arr.map(x => x); // dup
    tmp_arr[i] = number;
    switchedNum.push(parseInt(tmp_arr.join(''), 10));
  }
  return Math.max(...switchedNum);
};
// @lc code=end

