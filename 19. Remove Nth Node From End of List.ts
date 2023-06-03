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
    toArray(): Array<number> {
        let res: Array<number> = [];
        let p: ListNode | null = this;
        while (p != null) {
            res.push(p.val);
            p = p.next;
        }
        return res;
    }
}
function createListByArr(arr: Array<number>): ListNode {
    let length = arr.length;
    let head = new ListNode(arr[0]);
    let preNode = head;
    for (let i = 1; i < length; i++) {
        let newNode = new ListNode(arr[i]);
        preNode.next = newNode;
        preNode = newNode;
    }
    return head;
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null || head.next === null) {
        return null;
    }
    let p: ListNode | null = head,
        nodes: Array<ListNode> = [];
    while (p != null) {
        nodes.push(p);
        p = p.next;
    }
    let indexOfTarget = nodes.length - n;
    if (indexOfTarget < 0) {
        return null;
    }
    if (indexOfTarget === 0) {
        head = head.next;
        return head;
    }
    let preTarget = nodes[indexOfTarget - 1],
        nextTarget: ListNode | null;
    if (n === 1) {
        nextTarget = null;
    } else {
        nextTarget = nodes[indexOfTarget + 1];
    }
    preTarget.next = nextTarget;
    return head;
}

let head = [1, 2, 3, 4, 5],
    n = 2;
let headNode = createListByArr(head);
let result = removeNthFromEnd(headNode, 2);
if (result != null) {
    console.log(result.toArray());
} else {
    console.log("null");
}
