class Some {
  constructor(str: string) {
    const tokens = str.split("");
    console.log("tokens", tokens);
  }
}
function decodeString(s: string) {}

const case1 = "3[a]2[bc]";
const some = new Some(case1);

describe("394.Decode_String", () => {
  it("decodeString", () => {
    expect(decodeString(case1)).toBe("aaabcbc");
  });
});
