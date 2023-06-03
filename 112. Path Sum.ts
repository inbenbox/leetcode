import { Tree, TreeNode } from "./ts-data-structure/TreeNode";
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return false;
}

function sumPath(
    root: TreeNode,
    memo: { sum: number; isTarget: boolean } = { sum: 0, isTarget: false }
) {
    if (root) {
        memo.sum += root.val;
        console.log(memo.sum);
        if (!root.left && !root.right && memo.sum === 22) {
            memo.isTarget = true;
        }
        if (root.left) {
            sumPath(root.left, memo);
            memo.sum -= root.left.val;
        }
        if (root.right) {
            sumPath(root.right, memo);
            memo.sum -= root.right.val;
        }
    }

    let stack: TreeNode[] = [root];
    let sum: number = 0;
    while (stack.length) {
        let current: TreeNode = stack.pop() as TreeNode;
        sum += current.val;

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }
    return memo.isTarget;
}

let root = Tree.prototype.createByArray([
    5,
    4,
    8,
    11,
    null,
    13,
    4,
    7,
    2,
    null,
    null,
    null,
    1,
]);
Tree.prototype.inorder(root);
let res = sumPath(root);
console.log(res);
