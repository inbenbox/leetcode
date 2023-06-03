const edgeShape = {
    I: "│  ",
    T: "├──",
    L: "└──",
};

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    toString(): string {
        return (
            this.val +
            "(" +
            (this.left ? this.left.val : "#") +
            ", " +
            (this.right ? this.right.val : "#") +
            ")"
        );
    }
}
class Tree {
    calcuHight(root: TreeNode | null): number {
        if (!root) return 0;
        return (
            Math.max(this.calcuHight(root.left), this.calcuHight(root.right)) +
            1
        );
    }
    calcuSize(root: TreeNode | null): number {
        if (!root) return 0;
        return this.calcuSize(root.left) + this.calcuSize(root.right) + 1;
    }
    clone(root: TreeNode | null): TreeNode | null {
        if (!root) return null;
        let clone = new TreeNode(root.val);
        clone.left = this.clone(root.left);
        clone.right = this.clone(root.right);
        return clone;
    }
    createByArray(nums: (number | null)[]): TreeNode | null {
        if (nums.length < 1) return null;

        let root: TreeNode = new TreeNode(nums[0]),
            queue: TreeNode[] = [root],
            length = nums.length;
        for (let i = 1; i < length; i++) {
            let currentNode: TreeNode | undefined = queue.shift();
            if (currentNode === undefined) break;
            if (nums[i]) {
                queue.push((currentNode.left = new TreeNode(nums[i])));
            }
            i++;
            if (nums[i]) {
                queue.push((currentNode.right = new TreeNode(nums[i])));
            }
        }
        return root;
    }
    /**
     * @yields an array includes all nodes of current level
     * @param root
     */
    *traverseByLevel(root: TreeNode) {
        let queue: Array<TreeNode> = [root],
            lengthOfLevel: number = 1,
            current: TreeNode | null | undefined;
        while (queue.length > 0) {
            yield queue;
            for (let i = 1; i <= lengthOfLevel; i++) {
                current = queue.shift();
                if (current === undefined) break;
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
            lengthOfLevel = queue.length;
        }
    }
    // order
    *preorder(root: TreeNode | null) {
        if (root) {
            yield root;
            if (root.left) this.preorder(root.left);
            if (root.right) this.preorder(root.right);
        }
    }
    inorder(root: TreeNode | null, tabSize: number = 0): void {
        if (root === null) {
            console.log("\t".repeat(tabSize), "#");
        } else {
            this.inorder(root.left, tabSize + 1);
            console.log("\t".repeat(tabSize), root.val);
            this.inorder(root.right, tabSize + 1);
        }
    }
    *postorder(root: TreeNode | null) {
        if (root) {
            if (root.left) this.postorder(root.left);
            if (root.right) this.postorder(root.right);
            yield root;
        }
    }
}
const cases = [[1, null, 2, 3, 3]];

export { TreeNode, Tree, cases };
