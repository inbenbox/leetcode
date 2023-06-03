/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

    let result = []

    let indexQueue = []

    const lastOfIndexQueue = () => { return indexQueue[indexQueue.length - 1] }

    const cleanIndexQueue = (i) => {
        while (indexQueue[0] <= i - k) indexQueue.shift()
        while (nums[i] > lastOfIndexQueue()) indexQueue.pop()
    }

    let maxIndex = 0
    for (let i in nums) {
        cleanIndexQueue(i)

        if (nums[i] > nums[maxIndex]) maxIndex = i
        indexQueue.push(i);
        result.push(maxIndex);
    }
    return result

};




let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// let nums = [1], k = 1
// let nums = [1, -1], k = 1
console.log(maxSlidingWindow(nums, k));
