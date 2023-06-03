function uniquePaths(m: number, n: number): number {
    // if (m < 2 || n < 2) return 1;
    // if (m === 2) return n;
    // if (n === 2) return m;
    // let matrix: number[][] = [];
    // for (let i = 0; i < m; i++) {
    //     matrix.push([]);
    //     for (let j = 0; j < n; j++) {
    //         if (i === 0 || j === 0) {
    //             matrix[i][j] = 1;
    //             continue;
    //         }
    //         if (i === 1) {
    //             matrix[i][j] = j + 1;
    //             continue;
    //         }
    //         if (j === 1) {
    //             matrix[i][j] = i + 1;
    //             continue;
    //         }
    //         matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    //     }
    // }
    // return matrix[m - 1][n - 1];

    let matrix = Array.from({ length: m }, () => Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[m - 1][n - 1];
}
console.log(uniquePaths(3, 4));

// let a = new Array(7).fill(new Array(3).fill(1));
let a = Array.from({ length: 7 }, () => Array(3).fill(1));
a[1][2] = 2;
a[2][2] = 3;
a[2][1] = 4;
a[0][1] = 5;
console.log(a);
// [
//   [ 1, 1, 3 ],
//   [ 1, 1, 3 ],
//   [ 1, 1, 3 ],
//   [ 1, 1, 3 ],
//   [ 1, 1, 3 ],
//   [ 1, 1, 3 ],
//   [ 1, 1, 3 ]
// ]
