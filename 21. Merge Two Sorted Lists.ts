/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    toArray(): number[] {
        let p: ListNode | null = this,
            res: number[] = [];
        while (p) {
            res.push(p.val);
            p = p.next;
        }
        return res;
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    let l = list1,
        r = list2;
    if (!l && !r) return null;
    if (l && !r) return l;
    if (!l && r) return r;
    let empthNode: ListNode | null = new ListNode(),
        p = empthNode;

    while (l && r) {
        if (l.val < r.val) {
            p.next = l;
            l = l.next;
        } else {
            p.next = r;
            r = r.next;
        }
        p = p.next;
    }
    if (l) {
        p.next = l;
    }
    if (r) {
        p.next = r;
    }
    return empthNode.next;
}

let t = [[1, 2, 4], [1, 3, 4], [], [], [], [0]];
function toList(arr: number[]) {
    if (arr.length < 1) return null;
    let head: ListNode | null = new ListNode(arr[0]),
        p = head,
        i = 1;
    while (i < arr.length) {
        p.next = new ListNode(arr[i]);
        p = p.next;
        i++;
    }
    return head;
}

for (let i = 0; i < t.length; i += 2) {
    let l = toList(t[i]),
        r = toList(t[i + 1]);
    if (l && r) console.log("input\n", l.toArray(), r.toArray());

    let output = mergeTwoLists(l, r);
    if (output) console.log("output\n", output.toArray());
    console.log("------------");
}
