/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let length = nums.length
    if (length < 3) { return [] }
    let sn = nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < length - 2; i++) {
        if (i > 0 && sn[i] == sn[i - 1]) { continue }
        let target = 0 - sn[i]
        let l = i + 1
        let r = length - 1
        while (l < r) {
            let sum = sn[l] + sn[r]
            if (sum == target) {
                result.push([sn[i], sn[l], sn[r]])
                if (l + 1 == r) { break }
                do { l++ } while (sn[l] == sn[l - 1]);
                do { r-- } while (sn[r] == sn[r + 1]);
            } else if (sum < target) {
                l++
            } else {
                r--
            }
        }
    }
    return result
}
let TESTCASE = [
    [-1, 0, 1, 2, -1, -4],
    [],
    [0],
    [0, 0, 0],
    [0, 0],
    [1, 2, -2, -1],
    [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
]
TESTCASE.forEach(value => {
    console.log("input:", value);
    console.log("output:", threeSum(value))
})
