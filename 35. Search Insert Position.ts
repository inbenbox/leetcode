function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let mid = (left + right) / 2;
    if (nums[mid] < target) {
        left = mid;
    } else if (nums[mid] > target) {
        right = mid;
    } else {
        return mid;
    }
}
