function s(str: string): string {
    let sa = Array.from(str);
    sa.sort((a, b) => a.localeCompare(b));
    return sa.join();
}

function groupAnagrams(strs: string[]): string[][] {
    if (strs.length < 1) return [[""]];
    if (strs.length === 1) return [strs];

    const map = new Map<string, string[]>();
    for (const str of strs) {
        const target = str.split("").sort().join();
        if (!map.has(target)) {
            map.set(target, [str]);
        } else {
            map.get(target).push(str);
        }
    }
    return [...map.values()];
}

let t = [["eat", "tea", "tan", "ate", "nat", "bat"], [], ["a"]];
for (const val of t) {
    let res = groupAnagrams(val);
    console.log(res);
}
