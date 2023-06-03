export function divide(dividend: number, divisor: number): number {
    let positive: boolean = true,
        res = 0,
        binary = [divisor];
    if ((dividend ^ divisor) < 0) positive = false;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    for (let i = 1; i < 33; i++) {
        binary[i] = binary[i - 1] << 1;
    }
    console.log(binary);

    for (let i = 32; i > -1; i--) {
        if (binary[i] <= dividend) {
            dividend -= binary[i];
            res += 1 << i;
        }
    }

    res = Math.min(res, (1 << 31) - 1);
    return positive ? res : -res;
}

let res = divide(10, 3);
console.log(res);
