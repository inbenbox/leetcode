/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// var height = [1, 1];
// var height = [4, 3, 2, 1, 4];
// var height = [1, 2, 1];
var maxArea = function (height) {
    let max = 0;
    let array = height;
    let i = 0;
    let j = array.length - 1;
    if (i === j) {
        return 0;
    }
    while (i !== j) {
        let h = Math.min(array[i], array[j]) * (j - i);
        max = max > h ? max : h;
        array[i] < array[j] ? i++ : j--;
    }
    return max;
};
// console.log(maxArea(height));
// @lc code=end

