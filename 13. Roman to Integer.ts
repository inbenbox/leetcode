function romanToInt(s: string): number {
    let map = new Map([
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000],
            ["IV", 4],
            ["IX", 9],
            ["XL", 40],
            ["XC", 90],
            ["CD", 400],
            ["CM", 900],
        ]),
        length = s.length,
        result = 0;

    for (let i = 0; i < length; i++) {
        let val = s[i];
        if (i + 1 < length) {
            let str = s[i] + s[i + 1];
            if (
                str === "IV" ||
                str === "IX" ||
                str === "XL" ||
                str === "XC" ||
                str === "CD" ||
                str === "CM"
            ) {
                result += map.get(str)!;
                i++;
            } else {
                result += map.get(val)!;
            }
        } else {
            result += map.get(val)!;
        }
    }
    return result;
}

let t = ["III", "LVIII", "MCMXCIV"];

t.forEach((val) => {
    console.log(romanToInt(val));
    console.log(">>>>>>>>>>>>>>>>>>>>>>");
});
