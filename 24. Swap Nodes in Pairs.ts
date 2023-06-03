import { ListNode } from "./ts-data-structure/ListNode";
function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    let current: ListNode | null = head,
        output = head.next,
        prenode: ListNode | null = null,
        temp: ListNode | null = current.next;

    current.next = temp.next;
    temp.next = current;
    prenode = current;
    current = current.next;
    while (current && current.next) {
        temp = current.next;
        prenode.next = temp;
        current.next = temp.next;
        temp.next = current;
        prenode = current;
        current = current.next;
    }
    return output;
}

let t = [[1, 2, 3, 4], [], [1]];
for (const nums of t) {
    let nodes = ListNode.prototype.createListByArray(nums);
    let res = swapPairs(nodes);
    console.log("input:", nums);
    console.log("output:", ListNode.prototype.listToArray(res));
    console.log("------------");
}
