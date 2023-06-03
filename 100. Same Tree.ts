import { TreeNode } from "./ts-data-structure/TreeNode";
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if ((p.val = q.val)) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
}

let t = TreeNode.prototype.createByArray([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]);
t.showByLevel();
