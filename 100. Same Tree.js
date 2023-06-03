/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let np = p, nq = q

    if (p.val != q.val) { return false }
    if (p.left.val != q.left.val) { return false }
    if (p.right.val != q.right.val) { return false }
};

function t(node) {
    let tn = node
    let tl = node.left
    let tr = node.right
    if (tl != null && tl != undefined) { t(tl) }
    if (tn.val != undefined) { console.log(tn) }
    if (tr != null && tr != undefined) { t(tr) }
}

console.log(false ^ false);