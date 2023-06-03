function threeSumClosest(nums: number[], target: number): number {
    let length = nums.length;
    let s = nums.sort((a, b) => a - b),
        sum = 0,
        min: number;
    for (let i = 0; i < length; i++) {
        let left = i + 1,
            right = length - 1,
            targetInside = target - s[i];

        while (left < right) {
            let sum = s[i] + s[left] + s[right],
                diff = Math.abs(sum - target);
            min = diff > min ? min : diff;
        }
    }
    return 1;
}
