var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length, m = nums2.length
    if (n + m == 0) {
        return []
    }
    if (n + m == 1) {
        return nums1.concat(nums2)
    }
    let target = (n + m) / 2
    let even = (n + m) % 2 == 0 ? true : false

    let merge = []
    let i = 0, j = 0
    while (i < n || j < m) {
        if (i == n) {
            merge.push(nums2[j])
            j++
            continue
        }
        if (j == m) {
            merge.push(nums1[i])
            i++
            continue
        }
        if (nums1[i] < nums2[j]) {
            merge.push(nums1[i])
            i++
        } else {
            merge.push(nums2[j])
            j++
        }
    }
    if (even) {
        return (merge[target - 1] + merge[target]) / 2
    } else {
        return merge[target - 0.5]
    }
}
let testCase = [
    { nums1: [1, 3], nums2: [2, 4, 5] },
    { nums1: [1, 2], nums2: [3, 4] },
    { nums1: [1], nums2: [3, 4] },
    { nums1: [3, 4], nums2: [1] },
    { nums1: [1], nums2: [] },
    { nums1: [], nums2: [1] },
    { nums1: [1], nums2: [1] },
    { nums1: [], nums2: [2, 3] },
    { nums1: [3], nums2: [-2, -1] },
]

testCase.forEach(val => {
    console.log(val.nums1, val.nums2);
    let result = findMedianSortedArrays(val.nums1, val.nums2)
    console.log(result);
    console.log("-------------------------");
})