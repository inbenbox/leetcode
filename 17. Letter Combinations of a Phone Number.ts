// let map = new Map([
//     ["2", "abc"],
//     ["3", "def"],
//     ["4", "ghi"],
//     ["5", "jkl"],
//     ["6", "mno"],
//     ["7", "pqrs"],
//     ["8", "tuv"],
//     ["9", "wxyz"],
// ]);

// function combination(num: number): number[][] {
//     if (num === 1) {
//         return [[0]];
//     }
//     if (num === 2) {
//         return [
//             [0, 1],
//             [1, 0],
//         ];
//     }
//     let combs = combination(num - 1),
//         length = combs.length;
//     for (let i = 0; i < length; i++) {
//         combs[i].push(num - 1);
//         let temp = [...combs[i]];
//         for (let j = num - 1; j > 0; j--) {
//             let t = temp[j];
//             temp[j] = temp[j - 1];
//             temp[j - 1] = t;
//             combs.push([...temp]);
//         }
//     }
//     return combs;
// }

class TNode {
    val: number = 0;
    next: TNode[] = [];
    constructor(val?: number | undefined, next?: number[]) {
        this.val = val!;
        if (next) {
            for (let i = 0; i < next.length; i++) {
                let el = next[i];
                if (typeof el === "number") {
                    this.next.push(new TNode(el as number));
                }
            }
        }
    }
    getChildOfIndex(index: number): TNode {
        return this.next[index];
    }
    hasNext(): boolean {
        return this.next.length > 0;
    }
    toCombs(): number[][] {
        if (this.hasNext()) {
            let result: number[][] = [];
            for (let i = 0; i < this.next.length; i++) {
                result.push([this.val, this.next[i].val]);
            }
            return result;
        } else {
            return [];
        }
    }
    setNextByArray(arr: number[]): void {
        this.next = createTNodeListByArray(arr);
    }
}

function createTNodeListByArray(arr: number[]): TNode[] {
    let tNodeList: TNode[] = [];
    for (let i = 0; i < arr.length; i++) {
        let tNode = new TNode(arr[i]);
        tNodeList.push(tNode);
    }
    return tNodeList;
}

class Elist<T> {
    vals: T[];
    next: Elist<T> | null;
    length: number;
    constructor(vals?: T[], next?: Elist<T> | null) {
        this.vals = vals ? vals : [];
        this.next = next ? next : null;
        this.length = this.vals.length;
    }
    setNextByVals(vals: T[]): void {
        this.next = new Elist<T>(vals);
    }
}

function combs<T>(el: Elist<T>): T[][] {
    let result: T[][] = [];
    if (el.next) {
        let temp = combs(el.next);
        // console.log(temp);

        for (let i = 0; i < el.length; i++) {
            for (let j = 0; j < temp.length; j++) {
                let pusher = [el.vals[i]].concat(temp[j]);
                result.push(pusher);
            }
        }
        return result;
    } else {
        for (let i = 0; i < el.length; i++) {
            result.push([el.vals[i]]);
        }
    }
    return result;
}

function combsToString(combs: string[][]): string[] {
    let result: string[] = [];
    for (let i = 0; i < combs.length; i++) {
        result[i] = combs[i].join("");
    }
    return result;
}

let e = new Elist<string>(["a", "b", "c"]);
e.setNextByVals(["w", "x", "y", "z"]);
e.next!.setNextByVals(["d", "e", "f"]);
// let a = new Elist();
console.log(e);
console.log(combs(e));
console.log(combsToString(combs(e)));
