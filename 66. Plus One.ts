export function plusOne(digits: number[]): number[] {
    if (digits.length < 1) return [];

    let length = digits.length,
        plusOne: number = digits[length - 1] + 1,
        tens: number = Math.floor(plusOne / 10),
        sigle: number = plusOne % 10;
    digits[length - 1] = sigle;
    for (let i = length - 2; i >= 0; i--) {
        console.log(i);

        let sum = digits[i] + tens;
        tens = Math.floor(sum / 10);
        sigle = sum % 10;
        digits[i] = sigle;
        if (tens < 1) break;
    }
    if (tens > 0) digits.unshift(tens);
    return digits;
    // return String(Number(digits.join("")) + 1)
    //     .split("")
    //     .map((val) => Number(val));
}

let t = [
    [1, 2, 3],
    [4, 3, 2, 1],
    [9],
    [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
];

for (const c of t) {
    let res = plusOne(c);
    console.log(res);
    console.log("-------------------");
}
