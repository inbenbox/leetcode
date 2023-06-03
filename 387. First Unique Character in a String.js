/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    function enQueue(s) {

    }

    let queue = []
    let qi = {
        char: "",
        index: 0,
    }
    // queue.shift() // delete frist item

    for (let i in s) {
        if (s[i]) {
            queue.push({ char: s[i], index: i })
        }
    }

    queue.push(current)

};
