export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    // custom
    toArray(): number[] {
        let p: ListNode | null = this,
            res: number[] = [];
        while (p) {
            res.push(p.val);
            p = p.next;
        }
        return res;
    }
    length(): number {
        let p: ListNode | null = this,
            count = 0;
        while (p) {
            count++;
            p = p.next;
        }
        return count;
    }
}
export class List {
    head: ListNode | null;
    constructor(head: ListNode | null = null) {
        this.head = head;
    }
    *nodes(head: ListNode | null) {
        let p: ListNode | null = head;
        while (p) {
            yield p;
            p = p.next;
        }
    }
    *values(head: ListNode | null) {
        let p: ListNode | null = head;
        while (p) {
            yield p.val;
            p = p.next;
        }
    }
    clone(head: ListNode | null): ListNode | null {
        if (!head) return null;
        let p: ListNode | null = head.next,
            created: ListNode = new ListNode(head.val);
        while (p) {
            created.next = new ListNode(p.val);
            p = p.next;
        }
        return created;
    }
    /**
     * @returns array created by list
     */
    toArray(head: ListNode | null): number[] {
        // let p: ListNode | null = head,
        //     res: number[] = [];
        // while (p) {
        //     res.push(p.val);
        //     p = p.next;
        // }
        // return res;
        return [...this.values(head)];
    }

    /**
     * @returns The list which created by an array
     */
    createListByArray(nums: number[]): ListNode | null {
        let length = nums.length;
        if (length < 1) return null;
        if (length === 1) return new ListNode(nums[0]);
        let head = new ListNode(nums[0]),
            p: ListNode | null = head;
        for (let i = 1; i < length; i++) {
            p.next = new ListNode(nums[i]);
            p = p.next;
        }
        return head;
    }

    /**
     * insert a node(num) after a node
     */
    insertNode(node: ListNode | null, num: number): void {
        let next = node.next;
        node.next = new ListNode(num);
        node.next.next = next;
    }

    /**
     * @returns first index of val in node which equals num, if not found return -1
     */
    getIndexOfNum(node: ListNode | null, num: number): number {
        let p: ListNode | null = node,
            index = 0;
        while (p) {
            if (p.val === num) {
                return index;
            }
            index++;
            p = p.next;
        }
        return -1;
    }

    /**
     * @returns node.val equals num
     */
    findNum(node: ListNode | null, num: number): ListNode | null {
        let p: ListNode | null = node;
        while (p) {
            if (p.val === num) {
                return p;
            }
            p = p.next;
        }
        return null;
    }

    /**
     * delete node
     */
    deleteNode(node: ListNode | null): void {
        if (node) {
            node.val = node.next.val;
            node.next = node.next.next;
        }
    }
}
