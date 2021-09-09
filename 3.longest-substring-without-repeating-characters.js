// let s = "abcabcbb";
// let s = "bbbbb";
// let s = "pwwkew";
// let s = "";
/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let array = s;
    let i = 0;
    let count = 0;
    let max = 0;
    let checkString = "";
    for (let j = 0; j < array.length; j++) {
        if (!checkString.includes(array[j])) {
            checkString += array[j];
        } else {
            let sim = checkString.indexOf(array[j]);
            if (sim <= array.length - 2) {
                i = i + sim + 1;
                checkString = []
                for (let p = i; p <= j; p++) {
                    checkString += array[p];
                }
            } else {
                count = j - i + 1;
                max = count > max ? count : max;
                return max;
            }
        }
        count = j - i + 1;
        max = count > max ? count : max;
    }
    return max;
};

// console.log(lengthOfLongestSubstring(s));
// @lc code=end

