// function fourSum(nums: number[], target: number): number[][] {
//     let length = nums.length;
//     if (length < 4) {
//         return [];
//     }
//     let s = nums.sort((a, b) => a - b),
//         result: number[][] = [];
//     console.log(s);

//     for (let i = 0; i < length - 3; i++) {
//         for (let j = i + 1; j < length - 2; j++) {
//             let targetInSubArray = target - s[i] - s[j],
//                 left = j + 1,
//                 right = length - 1,
//                 set = new Set();
//             while (left < right) {
//                 let sum = s[left] + s[right];
//                 if (sum === targetInSubArray) {
//                     if (!set.has(s[left]) && !set.has(s[right])) {
//                         result.push([s[i], s[j], s[left], s[right]]);
//                         set.add(s[left]).add(s[right]);
//                     }
//                     left++;
//                 }
//                 if (sum < targetInSubArray) left++;
//                 if (sum > targetInSubArray) right--;
//             }
//             // if (s[j + 1] === s[j])
//             while (j < length && s[j + 1] === s[j]) {
//                 j++;
//             }
//         }
//         while (i < length && s[i + 1] === s[i]) {
//             i++;
//         }
//     }
//     return result;
// }

function fourSum(nums: number[], target: number): number[][] {
    let s: number[] = nums.sort((a, b) => a - b);
    let result = kSum(s, target, 4, 0);
    return result;
}
function kSum(
    nums: number[],
    target: number,
    k: number,
    index: number
): number[][] {
    let res: number[][] = [],
        length = nums.length;
    if (index >= length) {
        return res;
    }
    if (k == 2) {
        let i: number = index,
            j = length - 1;
        while (i < j) {
            if (nums[i] + nums[j] === target) {
                res.push([nums[i], nums[j]]);
                while (i < j && nums[i] === nums[i + 1]) i++;
                while (i < j && nums[j] === nums[j - 1]) j--;
                i++;
                j--;
            } else if (nums[i] + nums[j] < target) {
                i++;
            } else {
                j--;
            }
        }
    } else {
        for (let i = index; i < length - k + 1; i++) {
            let ksubOneSum = kSum(nums, target - nums[i], k - 1, i + 1);
            if (ksubOneSum.length > 0) {
                for (const val of ksubOneSum) {
                    val.push(nums[i]);
                }
                res.push(...ksubOneSum);
            }
            while (i < length - 1 && nums[i] === nums[i + 1]) {
                i++;
            }
        }
    }
    return res;
}

let test = [
    { nums: [1, 0, -1, 0, -2, 2], target: 0 },
    { nums: [2, 2, 2, 2, 2], target: 8 },
    { nums: [-2, -1, -1, 1, 1, 2, 2], target: 0 },
];

test.forEach((val) => {
    console.log("input", val.nums, val.target);
    let result = fourSum(val.nums, val.target);
    console.log(result);
    console.log("---------------------------");
});

function twoSum(nums: number[], targetInSubArray: number): number[][] {
    let i = -1,
        j = -1;
    let length = nums.length,
        sorted = nums.sort((a, b) => a - b),
        result: number[][] = [],
        set = new Set(),
        left = 0,
        right = length - 1;
    while (left < right) {
        console.log("left", left, "right", right);
        let sum = sorted[left] + sorted[right];
        if (sum === targetInSubArray) {
            if (!set.has(left) && !set.has(right)) {
                result.push([sorted[left], sorted[right]]);
            }
            // result.add(i).add(j).add(left).add(right);
            left++;
        }
        if (sum < targetInSubArray) left++;
        if (sum > targetInSubArray) right--;
    }
    return result;
}

// let nums = [1, 0, -1, 0, -2, 2];
// console.log(twoSum(nums, 0));
