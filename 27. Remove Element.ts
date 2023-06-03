function removeElement(nums: number[], val: number): number {
    for (let i = 0; i < nums.length; i++) {
        let start: number = 0;
        console.log("if", i);
        if (nums[i] === val) {
            start = i;
            while (i < nums.length && nums[i] === val) i++;
            if (i >= nums.length) return 0;
            let distance = i - start;
            console.log(
                "nums[i-distance]-->",
                nums[i - distance],
                "=",
                "nums[i]-->",
                nums[i]
            );
            while (i < nums.length) nums[i - distance] = nums[i];
            i = 0;
        }
    }

    return nums.length;
}

let t = [[3, 2, 2, 3], 3, [0, 1, 2, 2, 3, 0, 4, 2], 2];
for (let i = 0; i < t.length; i += 2) {
    let res = removeElement(t[i] as number[], t[i + 1] as number);
    console.log(res);
    console.log("-----------------");
}
