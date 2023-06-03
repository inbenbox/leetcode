function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let tempQueue: Array<string> = new Array<string>(numRows),
        i = 0,
        j = 0,
        direction = -1;
    while (i < s.length) {
        if (tempQueue[j] != undefined) {
            tempQueue[j] += s.charAt(i);
        } else {
            tempQueue[j] = s.charAt(i);
        }
        if (i % (numRows - 1) === 0) direction = -direction;
        j += direction;
        i++;
    }
    return tempQueue.join("");
}

let t1 = ["PAYPALISHIRING", "PAYPALISHIRING", "A", "AB"];
let t2 = [3, 4, 1, 1];

for (let i = 0; i < t1.length; i++) {
    let j = i,
        result = convert(t1[i], t2[j]);
    console.log(result);
}
