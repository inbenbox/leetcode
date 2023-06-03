function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";
    let firstNum: string[] = num1.split("").reverse(),
        secondNum: string[] = num2.split("").reverse(),
        n = firstNum.length,
        m = secondNum.length;

    let answer: number[] = new Array<number>(n + m).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let multiplier: number =
                    Number(firstNum[i]) * Number(secondNum[j]) +
                    answer[i + j] +
                    answer[i + j + 1] * 10,
                singleDigits: number = multiplier % 10,
                tensDigit: number = (multiplier - singleDigits) / 10;
            answer[i + j] = singleDigits;
            answer[i + j + 1] = tensDigit;
        }
    }
    return answer
        .reverse()
        .join("")
        .replace(/^0+(?=[1-9][0-9]*$)/, "");
}

let t = ["2", "3", "123", "4", "123456789", "987654321", "0", "332620029"];
for (let i = 0; i < t.length; i += 2) {
    let res = multiply(t[i], t[i + 1]);
    console.log(res);
    console.log("---------------------");
}

// console.log(
//     multiply(
//         "98765432109999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999876543210",
//         "10000000000"
//     )
// );

const SAFE_FACTOR = 94906265;
const SAFE_DIGIT = 7;
