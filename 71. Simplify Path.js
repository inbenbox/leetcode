/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let dirs = []

    let dir = ""
    for (let i in path) {
        if (path[i] === '/' && i === 0) {
            continue
        }
        if (path[i] === '/') {
            dirs.push(dir);
            dir = ""
            continue
        }
        dir += path[i]
        if (i == path.length - 1) {
            dirs.push(dir);
        }
    }

    let result = []
    for (let i in dirs) {
        if (dirs[i] === '' || dirs[i] === '.') {
            continue
        }
        if (dirs[i] === '..') {
            result.pop()
            continue
        }
        result.push(dirs[i])
    }

    let pathResult = ""
    if (result.length === 0) {
        return '/'
    } else {
        for (let i in result) {
            pathResult = pathResult + '/' + result[i]
        }
        return pathResult
    }

};



let p1 = "/home/"
let p2 = "/../"
let p3 = "/home//foo/"
let p4 = "/home/foo/../"
let p5 = "/home"
console.log(simplifyPath(p1));
console.log(simplifyPath(p2));
console.log(simplifyPath(p3));
console.log(simplifyPath(p4));
console.log(simplifyPath(p5));
