/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let jArr = J.split('');
  let sArr = S.split('');
  let counter = 0;
  for (let sKey in sArr) {
    for (let jKey in jArr) {
      if (sArr[sKey] === jArr[jKey]) {
        counter++;
      }
    }
  }
  // console.log(jArr, sArr)
  return counter;
};
// @lc code=end

