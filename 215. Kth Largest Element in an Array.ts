export function findKthLargest(nums: number[], k: number): number {
    // O(n)
    // let sort = nums.sort((a, b) => b - a);
    // return sort[k - 1];

    // O(k)
    let i = k;
    while (i--) {
        for(const )
    }
}

let t = [[3, 2, 1, 5, 6, 4], 2, [3, 2, 3, 1, 2, 4, 5, 5, 6], 4];

for (let i = 0; i < t.length; i += 2) {
    let res = findKthLargest(t[i] as number[], t[i + 1] as number);
    console.log(res);
    console.log("-----------------------------------------------");
}
