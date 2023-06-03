// function reverse(x: number): number {
//     function digit(num: number, digit: number): number {
//         return Math.floor((num % 10 ** (digit + 1)) / 10 ** digit);
//     }

//     function digitSize(num: number) {
//         if (num === 0) return 0;
//         let i = 0;
//         while (10 ** i <= num) {
//             i++;
//         }
//         return i - 1;
//     }
//     let n = x > 0 ? x : -x;

//     if (digit(n, 0) * 10 ** digitSize(n) > 2147483647) {
//         return 0;
//     }
//     let reverseN = 0,
//         length = digitSize(n);
//     for (let i = 0; i <= length; i++) {
//         let d = digit(n, i);
//         reverseN += d * 10 ** (length - i);
//         if (reverseN > 2147483647) return 0;
//     }
//     return x > 0 ? reverseN : -reverseN;
// }
function reverse(x: number): number {
    let reverseN: number;
    if (x < 0) {
        reverseN = Number((-x).toString().split("").reverse().join(""));
        return reverseN > 2147483647 ? 0 : -reverseN;
    } else {
        reverseN = Number(x.toString().split("").reverse().join(""));
        return reverseN > 2147483647 ? 0 : reverseN;
    }
}

let test = [123, -123, 120, 10, 1563847412];
test.forEach((val) => {
    console.log(reverse(val));
});
