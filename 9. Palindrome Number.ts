function isPalindrome(x: number): boolean {
    let tempList = x
            .toString()
            .split("")
            .map((val) => Number(val)),
        i = 0,
        j = tempList.length - 1;
    if (j === 0) return true;
    while (i < j) {
        if (tempList[i] != tempList[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
let result = isPalindrome(123321);
console.log(result);
