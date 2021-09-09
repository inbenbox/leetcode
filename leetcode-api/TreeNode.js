module.exports = class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
    createList(arr) {
        if (!arr.length || arr[0] === null) return null;
        var res = new TreeNode(arr[0]);
        var nodes = arr.slice(1);
        var children = [res];
        while (children.length) {
            let current = children.shift();

            if (!current || current.val === null) {
                continue;
            }

            if (nodes.length) {
                let val = nodes.shift();
                if (val) {
                    current.left = new TreeNode(val);
                    children.push(current.left);
                }
            }

            if (nodes.length) {
                let val = nodes.shift();
                if (val) {
                    current.right = new TreeNode(val);
                    children.push(current.right);
                }
            }
        }
        return res;
    }
}
// create Tree from array
// https://leetcode.com/faq/#binary-tree
