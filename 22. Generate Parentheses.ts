function check(indexs: number[], n: number): boolean {
    let length = indexs.length;
    if (indexs[length - 1] != 2 * n - 1 || indexs[0] === 0) {
        return false;
    }
    let count = indexs[0] - 1;
    for (let i = 1; i < length; i++) {
        let space = indexs[i] - indexs[i - 1] - 1,
            c = count + space - 1;
        count = c < 0 ? 0 : c;
    }
    return count === 0;
}

function select(n: number, star: number, end: number): number[][] {
    // n === 1 return [star to end]
    if (n === 1) {
        let res: number[][] = [];
        for (let i = star; i <= end; i++) {
            res.push([i]);
        }
        return res;
    }
    if (end < star || n === 0) {
        return [];
    }
    // n > 1
    // select n - 1 numbers in 1 to 2*n - 1
    let res: number[][] = [];
    while (star < end - n + 2) {
        let selection = select(n - 1, star + 1, end);
        for (let i = 0; i < selection.length; i++) {
            selection[i].unshift(star);
            res.push(selection[i]);
        }
        star++;
    }
    return res;
}

function toParentheses(indexs: number[]): string {
    let res: string[] = [];
    for (let i = 0; i < indexs.length; i++) {
        res[indexs[i]] = ")";
    }
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i] === undefined ? "(" : ")";
    }
    return res.join("");
}

function generateParenthesis(n: number): string[] {
    let combs = select(n, 0, 2 * n - 1),
        prepare: number[][] = [],
        res: string[] = [];
    for (let i = 0; i < combs.length; i++) {
        if (check(combs[i], n)) {
            prepare.push(combs[i]);
        }
    }
    for (let i = 0; i < prepare.length; i++) {
        res.push(toParentheses(prepare[i]));
    }

    return res;
}

console.log(generateParenthesis(8));
