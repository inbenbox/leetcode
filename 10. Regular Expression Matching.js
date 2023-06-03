var isMatch = function (s, p) {
    // processing
    function isCharExist(s, c) {
        return s.indexOf(c) === -1;
    }

    let i = 0;
    let j = 0;
    while (i < s.length && j < p.length) {
        if (isCharExist(p, "*")) {
            if (s[i] === p[j]) {
                i++;
                j++;
            }
            if (p[j] === ".") {
                if (p[j + 1] === "*") {
                    return true;
                }
                i++
                j++
            }
            while (p[j] === "*" && s[i + 1] === p[j - 1] && i < s.length) {
                i++
            }
        } else if (s.length != p.length) {
            return false;
        }

    }
    return i === s.length;
};


// let s = "aa", p = "a"
let s = "aa", p = "a*"
// let s = "ab", p = ".*"
console.log(isMatch(s, p));


