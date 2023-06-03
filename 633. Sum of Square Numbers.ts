function judgeSquareSum(c: number): boolean {
    // let maxI: number = Math.sqrt(c);
    // for (let i = 0; i <= maxI; i++) {
    //     let maxJ = Math.floor(Math.sqrt(c - i * i));
    //     for (let j = maxJ; j >= 0; j--) {
    //         let squareSum: number = i * i + j * j;
    //         if (squareSum < c) break;
    //         else if (i * i + j * j === c) return true;
    //     }
    // }
    // return false;
    let right = Math.floor(Math.sqrt(c)),
        left = 0;
    while (left <= right) {
        let sum = left * left + right * right;
        if (sum < c) {
            left++;
        } else if (sum > c) {
            right--;
        } else {
            return true;
        }
    }
    return false;
}
let t = [5, 3, 1000000000, 2147483643];
for (const val of t) {
    let res = judgeSquareSum(val);
    console.log(res);
    console.log("--------------");
}
