// function isMatch(s: string, p: string): boolean {
//     let i = 0,
//         j = 0,
//         sl = s.length,
//         pl = p.length,
//         sp: string[] = [],
//         dp: boolean[][] = [];

//     let pusher = "";
//     for (let i = 0; i < pl; i++) {
//         while (i + 1 < pl) {
//             if (p[i + 1] === "*") {
//                 sp.push(pusher);
//                 pusher = "";
//                 sp.push(p[i] + p[i + 11]);
//                 i += 2;
//             } else {
//                 pusher += p[i];
//             }
//         }
//         pusher += p[i];
//         sp.push(pusher);
//     }
//     console.log(sp);

//     function star(ps: string, pn: string) {
//         if (ps === ".") {
//             // i++ to s[i] === pn || i to out off range
//             if (pn === ".") {
//                 // i++ to
//             } else {
//                 // i++ to s[i] === pn
//             }
//         } else {
//             // i++ to s[i] != ps || i out off range
//         }
//     }

//     function normal(p) {
//         if (p[i] === "." ? true : s[i] === p[i]) {
//             i++;
//         }
//     }

//     return true;
// }

// let t = [
//     "aa",
//     "a",
//     "aa",
//     "a*",
//     "ab",
//     ".*",
//     "abbbbbc",
//     "ab*c",
//     "abbb",
//     "a.*",
//     "aab",
//     "c*a*b",
// ];
// for (let i = 0; i < t.length; i += 2) {
//     console.log(isMatch(t[i], t[i + 1]));
//     console.log("---------------------");
// }

class State {
    id: number;
}
