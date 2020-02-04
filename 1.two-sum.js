/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    let complimentIndex = nums.indexOf(compliment, i + 1);
    if (i !== complimentIndex && complimentIndex > 0) {
      return [i, complimentIndex];
    }
  }
};
// @lc code=end

