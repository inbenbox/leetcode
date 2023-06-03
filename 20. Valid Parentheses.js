/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case ')':
                if (stack[stack.length - 1] != '(') {
                    return false
                }
                stack.pop()
                break;
            case ']':
                if (stack[stack.length - 1] != '[') {
                    return false
                }
                stack.pop()
                break;
            case '}':
                if (stack[stack.length - 1] != '{') {
                    return false
                }
                stack.pop()
                break;
            default:
                stack.push(s[i])
                break;
        }
    }

    return stack.length > 0 ? false : true
};




let s1 = "()"
let s2 = "()[]{}"
let s3 = "(]"
let s4 = "{[]}"


console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));