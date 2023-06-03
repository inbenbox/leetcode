class Test {
    val: number;
    constructor(val: number) {
        this.val = val === undefined ? 0 : val;
    }
}

let t = new Test(2);
console.log(t === null ? t.val : "null");
