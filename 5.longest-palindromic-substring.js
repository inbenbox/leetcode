/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var s = "cbbd"
var longestPalindrome = function (s) {
    let mid = [];
    if (!s[1]) {
        return s;
    }
    else {
        for (let i = 1; i <= s.length - 1; i++) {
            if (s[i - 1] === s[i + 1] || s[i - 1] === s[i] || s[i + 1] === s[i]) {
                mid.push(i);
            }
        }
    }
    console.log(mid);
    let str = "";
    return str;
};
longestPalindrome(s);
// @lc code=end

