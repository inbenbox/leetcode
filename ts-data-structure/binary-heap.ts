import { Tree, TreeNode } from "./TreeNode";
export interface binaryHeapInterface<T> {
    size: T;
    array: T[];

    isEmpty(): boolean;
    insert(element: T): void;
    findMin(): void;
    deleteMin(element?: T): void;
    makeEmpty(): void;
}
export class binaryHeap implements binaryHeapInterface<number> {
    size: number;
    array: number[];

    constructor(nums: number[]) {
        this.array = [0, ...nums];

        this.buildHeap();
    }
    show(i: number = 1, tabSize: number = 0) {
        if (0 < i && i < this.array.length) {
            this.show(i * 2, tabSize + 1);
            console.log("\t".repeat(tabSize), this.array[i]);
            this.show(i * 2 + 1, tabSize + 1);
        }
    }
    private percolateDown(index: number, remove: boolean = false): void {
        let target: number,
            parent: number = this.array[index];
        // has left
        while (index * 2 <= this.size) {
            target = index * 2;
            if (
                target != this.size &&
                this.array[target + 1] < this.array[target]
            ) {
                target++;
            }
            if (this.array[target] < parent) {
                this.array[index] = this.array[target];
            } else {
                break;
            }
            index = target;
        }
        this.array[index] = parent;
        if (remove) this.array.slice(index, index + 1);
    }
    private buildHeap(): void {
        for (let i = Math.floor(this.size / 2); i > 0; i--) {
            this.percolateDown(i--);
        }
    }

    isEmpty(): boolean {
        return false;
    }
    insert(element: number): void {
        this.array.push(element);
        let index = this.array.length - 1;
        const current = this.array[index];
        while (index > 1) {
            let parentIndex = Math.floor(index / 2),
                parent = this.array[parentIndex];
            if (parent >= current) {
                this.array[parentIndex] = current;
                this.array[current] = parent;
                index = parentIndex;
            } else break;
        }
    }
    findMin(): number {
        return this.array[1];
    }
    deleteMin(): void {
        this.percolateDown(1, true);
    }
    makeEmpty(): void {}
}

let t = [1, 2, 3, 4];
let h = new binaryHeap(t);
h.insert(5);
console.log(h.array);
h.show();

for (let i = 0; i < 2; i++) {
    console.log(h.findMin());
    h.deleteMin();
}
