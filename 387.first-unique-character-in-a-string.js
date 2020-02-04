/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let txtArr = s.split('');
  let hash = {};
  for (let i in txtArr) {
    if (hash[txtArr[i]]) {
      hash[txtArr[i]] += 1;
    } else {
      hash[txtArr[i]] = 1;
    }
  }
  let chara = "";
  for (let j in hash) {
    if (hash[j] === 1) {
      chara = j;
      break;
    }
  }
  return txtArr.indexOf(chara);
};
// @lc code=end

