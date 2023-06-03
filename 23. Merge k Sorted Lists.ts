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

function createListByArray(nums: number[]): ListNode | null {
    if (nums.length < 1) return null;
    if (nums.length === 1) return new ListNode(nums[0]);
    let head = new ListNode(nums[0]),
        p: ListNode | null = head;
    for (let i = 1; i < nums.length; i++) {
        p.next = new ListNode(nums[i]);
        p = p.next;
    }
    return head;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let map = new Map();
    for (let i = 0; i < lists.length; i++) {
        map.set(i, lists[i]);
    }
    function setNext(i: number) {
        if (map.get(i)) map.set(i, map.get(i).next);
    }
    function findMin(): number {
        let i = 0;
        for (const [index, node] of map.entries()) {
            if (node) {
                if (!map.get(i)) i = index;
                else i = node.val < map.get(i).val ? index : i;
            }
        }
        return i;
    }
    function hasListNode(): boolean {
        for (const node of map.values()) if (node) return true;
        return false;
    }
    let head = new ListNode(),
        p: ListNode | null = head;

    while (hasListNode() && p) {
        let minIndex = findMin();
        p.next = map.get(minIndex);
        setNext(minIndex);
        p = p.next;
    }
    return head.next;
}
let l1 = createListByArray([1, 4, 5]),
    l2 = createListByArray([1, 3, 4]),
    l3 = createListByArray([2, 6]);
let res = mergeKLists([l1, l2, l3]);
console.log(res?.toArray());
