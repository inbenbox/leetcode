function firstMissingPositive(nums: number[]): number {
    for (let i = 1; i <= nums.length + 1; i++) {
        let idx = nums[i] - 1;
        if (idx === i) continue;
        while (1 <= nums[i] && nums[i] <= nums.length && nums[idx] != nums[i]) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            idx = nums[i] - 1;
        }
    }
    let i = 0;
    for (; i < nums.length; i++) {
        if (nums[i] != i + 1) return i + 1;
    }
    return i + 1;
}

let t = [
    [1, 2, 0], // 3
    [3, 4, -1, 1], // 2
    [7, 8, 9, 11, 12], // 1
    [1], // 2
    [-1, -1, -1, -1, 1], // 2
    [2, 3], // 1
    [1, 2, 3], // 4
    [1, 1], //2
];

for (const val of t) {
    let res = firstMissingPositive(val);
    console.log("input\t", val);
    console.log("output\t", res);
    console.log("--------------------");
}
