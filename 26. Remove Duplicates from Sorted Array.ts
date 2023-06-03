function removeDuplicates(nums: number[]): number {
    if (nums.length < 1) return 0;
    if (nums.length === 1) return 1;
    let res: number[] = [nums[0]],
        tempNumber: number = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != tempNumber) {
            res.push(nums[i]);
            tempNumber = nums[i];
        }
    }
    return res.length;
}
let t = [
    [1, 1, 2],
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
];
for (const val of t) {
    console.log(removeDuplicates(val));
}
