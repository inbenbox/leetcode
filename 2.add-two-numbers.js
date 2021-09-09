/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let p1 = l1;
    let p2 = l2;
    let d1 = 0;
    let d2 = 0;
    let listNode = new ListNode();
    while (p1 || p2) {
        d1 = p1 ? p1.val : 0;
        d2 = p2 ? p2.val : 0;
        p1 = p1.next ? p1.next : null;
        p2 = p2.next ? p2.next : null;
        sum = d1 + d2;
        n = sum % 10;
        flag = Math.floor(sum / 10);
        if (flag > 0) {
        }
    }
    let length = sum.length;
    for (let i = 0; i < length; i++) {
        const element = sum[i];
        let n = element % 10;
        let flag = Math.floor(element / 10);
        sum[i] = n;
        if (flag > 0) {
            if (i === length - 1) {
                sum.push(flag);
            } else {
                sum[i + 1] += flag;
            }
        }
    }
    let listNode = new ListNode();
    // listNode.arrayToList(sum);
    let p = listNode;
    p.val = sum[0];
    for (let i = 1; i < sum.length; i++) {
        const element = sum[i];
        while (p.next) {
            p = p.next;
        }
        p.next = new ListNode(element);
    }
    console.log(listNode);
    return listNode;
};
// @lc code=end

