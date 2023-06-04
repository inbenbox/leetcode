import { describe, it, expect } from "vitest";

class Some {
  value: string;
  constructor(str: string) {
    const tokens = str.split("");
    // console.log("tokens", tokens);
    this.value = tokens[0];
  }
}
const isNumeric = (value: any) => !isNaN(parseFloat(value)) && isFinite(value);

function decodeString(s: string): string {
  if (!s.includes("[")) {
    return s;
  }

  const stack: [string, number][] = [];
  let multiplier = 0;
  let curStr = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === "[") {
      stack.push([curStr, multiplier]);
      multiplier = 0;
      curStr = "";
      continue;
    }

    if (c === "]") {
      const [prevStr, prevMultiplier] = stack.pop()!;
      curStr = prevStr + curStr.repeat(prevMultiplier);
      continue;
    }

    if (isNumeric(c)) {
      multiplier = multiplier * 10 + +Number(c);
      continue
    }

    curStr += c;
  }

  return curStr
}

describe("394.Decode_String", () => {
  it("decodeString", () => {
    const case1 = "3[a]2[bc]";
    expect(decodeString("a")).toBe("a");
    expect(decodeString("2[a]")).toBe("aa");
    expect(decodeString("b2[a2[c]]b")).toBe("baccaccb");
    expect(decodeString("2[a2[c]]b")).toBe("accaccb");
    // =2 2
  });
});
