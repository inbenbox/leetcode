function intToRoman(num: number): string {
    let map = new Map([
            [4, "IV"],
            [9, "IX"],
            [40, "XL"],
            [90, "XC"],
            [400, "CD"],
            [900, "CM"],
            [1, "I"],
            [5, "V"],
            [10, "X"],
            [50, "L"],
            [100, "C"],
            [500, "D"],
            [1000, "M"],
        ]),
        nums = num
            .toString()
            .split("")
            .map((val) => Number(val)),
        length = nums.length,
        result = "";

    for (let i = 0; i < length; i++) {
        let val = nums[i],
            digit = 10 ** (length - 1 - i),
            target = val * digit;

        if (map.has(target)) {
            result += map.get(target);
        } else if (1 <= val && val <= 3) {
            for (let i = 0; i < val; i++) {
                result += map.get(digit);
            }
        } else if (6 <= val && val <= 8) {
            result += map.get(digit * 5);
            for (let i = 0; i < val - 5; i++) {
                result += map.get(digit);
            }
        }
    }

    return result;
}

let t = [3, 58, 1994];

t.forEach((val) => intToRoman(val));
