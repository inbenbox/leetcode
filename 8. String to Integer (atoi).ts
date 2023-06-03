unfinish;

function myAtoi(s: string): number {
    let t = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "-":
                t.push(s[i]);
                break;
            default:
                break;
        }
    }
    return Number(t.join(""));
}
let test = ["42", "   -42", "4193 with words"];
test.forEach((val) => {
    let res = myAtoi(val);
    console.log(res);
    console.log("---------------------------");
});
