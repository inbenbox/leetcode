class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) {
        return null;
    }
    if (head.next && head.val === val) {
        head.val = head.next.val;
        head.next = head.next.next;
    } else {
        return null;
    }

    let p = head;
    while (p) {
        if (p.next && p.next.val === val) {
            p.next = p.next.next;
        }
    }
}
