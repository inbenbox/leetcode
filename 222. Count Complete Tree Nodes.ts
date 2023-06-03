import { TreeNode } from "./ts-data-structure/TreeNode";

function countNodes(root: TreeNode | null): number {
    if (root === null) return 0;
    if (root.left && root.right) {
        return countNodes(root.left) + countNodes(root.right) + 1;
    } else if (root.left) {
        return countNodes(root.left) + 1;
    } else {
        return countNodes(root.right) + 1;
    }
}

let t = [[1, 2, 3, 4, 5, 6], [], [1]];

for (const tree of t) {
    let root = TreeNode.prototype.createByArray(tree);
    let res = countNodes(root);
    console.log("<input>");
    if (root) root.inorder(root, 1);
    else console.log("\tnull");
    console.log("<output>\n\t", res);
    console.log("-----------------------------------");
}
