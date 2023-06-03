/**
 * @param {string[]} operations
 * @return {number}
 */

var finalValueAfterOperations = function (operations) {
    let value = operations
    let x = 0
    value.forEach(value => {
        if (value === 'X++' || value === '++X') {
            x++
        }
        if (value === 'X--' || value === '--X') {
            x--
        }
    })
    return x
};
let operations = ["X++", "++X", "--X", "X--"]
let output = finalValueAfterOperations(operations);
console.log(output);
