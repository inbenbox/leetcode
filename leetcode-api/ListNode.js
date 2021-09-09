module.exports = class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.array = function () {
            return toArray(this);
        }
    }
    createList(arr) {
        var head = new exports.ListNode();
        var current = head;
        arr.forEach(function (item) {
            current.next = new ListNode(item);
            current = current.next;
        });
        return head.next;
    }
    toArray(node) {
        var ans = [];
        while (node) {
            ans.push(node.val)
            node = node.next;
        }
        return ans;
    }
}