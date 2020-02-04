/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let arr = [];
  let minI = Infinity;
  for (let i in strs) {
    arr.push(strs[i].split(""));
    minI = minI > arr[i].length ? arr[i].length : minI;
  }
  //console.log(arr)
  let result = "";
  if (arr.length > 0) {
    txtLoop:
    for (let i = 0; i < minI; i++) {
      let chara = arr[0][i];
      for (let j = 0; j < arr.length; j++) {
        //console.log(chara, arr[j][i], j, arr.length - 1)
        if (chara !== arr[j][i]) {
          break txtLoop;
        }
        if (j === arr.length - 1) {
          result += chara;
        }
      }
    }
  }
  return result;
};
// @lc code=end

