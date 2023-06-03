// /**
//  *
//  * @param s my first solution
//  * @returns
//  */
// function longestPalindrome(s: string): string {
//     let length = s.length;
//     if (length < 2) {
//         return s;
//     }
//     if (length === 2) {
//         return s[0] === s[1] ? s : s[0];
//     }
//     let maxString: string[] = [];
//     for (let i = 0; i < length - 1; i++) {
//         if (s[i] === s[i + 1]) {
//             let left = i,
//                 right = i + 1,
//                 temp: string[] = [];
//             while ((left >= 0 || right < length) && s[left] === s[right]) {
//                 temp.unshift(s[left]);
//                 temp.push(s[right]);
//                 left--;
//                 right++;
//             }
//             maxString = temp.length > maxString.length ? temp : maxString;
//         }
//         if (s[i] === s[i + 2]) {
//             let left = i,
//                 right = i + 2,
//                 temp: string[] = [s[i + 1]];
//             while ((left >= 0 || right < length) && s[left] === s[right]) {
//                 temp.unshift(s[left]);
//                 temp.push(s[right]);
//                 left--;
//                 right++;
//             }
//             maxString = temp.length > maxString.length ? temp : maxString;
//         }
//     }

// }

function longestPalindrome(s: string): string {
    let length = s.length;
    let matrix: boolean[][] = new Array(length);
    for (let i = 0; i < length; i++) {
        matrix[i] = [];
        matrix[i][i] = true;
        if (i + 1 < length) matrix[i][i + 1] = s[i] === s[i + 1];
    }
    console.table(matrix);
    for (let left = 0; left < length; left++) {
        for (let right = 0; right < length; right++) {}
    }

    return "";
}
let test = [
    "babad",
    "cbbd",
    // "",
    // "a",
    // "abcds",
    // "aaaa",
    // "aaaaaa",
    // "aklsdjflaka",
    // "kjdkf",
];

for (let i = 0; i < test.length; i++) {
    let res = longestPalindrome(test[i]);
    console.log(res);
}
