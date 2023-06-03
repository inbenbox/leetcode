function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m: number = obstacleGrid.length;
    let n: number = obstacleGrid[0].length;

    let dp = Array.from({ length: m }, () => Array(n).fill(1));

    // formmat dp: [1, 1, 1, 1, 1] ---> [1, 0, 1, 1, 1] ---> [1, 0, 0, 0, 0]
    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) dp[0][i] = 0;
        else if (i > 0 && dp[0][i - 1] === 0) dp[0][i] = 0;
    }
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) dp[i][0] = 0;
        else if (i > 0 && dp[i - 1][0] === 0) dp[i][0] = 0;
    }
    // dp
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
}
console.log(
    uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ]),
    uniquePathsWithObstacles([
        [0, 1],
        [0, 0],
    ]),
    uniquePathsWithObstacles([[0, 0]])
);
