export class GNode {
    val: number;
    neighbors: GNode[];
    constructor(val?: number, neighbors?: GNode[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
    toString(): string {
        return `${this.val} --> [${this.neighbors.map((node) => node.val)}]`;
    }
}

interface GraphInterface {
    size(root: GNode): number;
    clone(root: GNode | null): GNode | null;
}
class Graph implements GraphInterface {
    map: Map<number, GNode>;
    nodes: GNode[];
    constructor(marix?: number[][]) {
        this.map = new Map<number, GNode>();
        for (const [index, neighborIds] of marix.entries()) {
            if (this.map.get(index + 1) === undefined)
                this.map.set(index + 1, new GNode(index + 1));
            let currentGraphNode = this.map.get(index + 1);
            for (const neighborId of neighborIds) {
                if (this.map.get(neighborId) === undefined)
                    this.map.set(neighborId, new GNode(neighborId));
                currentGraphNode.neighbors.push(this.map.get(neighborId));
            }
        }
    }
    setNode(id: number) {
        this.nodes[id] = new GNode(id);
    }
    getNode(id: number) {
        return this.nodes[id];
    }
    getRoot(): GNode | null {
        return this.map.get(1) || null;
    }
    getId(id: number): GNode | null {
        return this.map.get(id) || null;
    }
    hasId(id: number) {
        return this.map.has(id);
    }
    size(root: GNode) {
        let count: number = 0;
        for (const node of this.DFS(root)) {
            count++;
        }
        return count;
    }
    clone(root: GNode | null): GNode | null {
        if (!root) return null;
        let visited: GNode[] = [],
            toClones: GNode[] = [root],
            cloneRoot: GNode = new GNode(root.val),
            created: GNode[] = [];
        visited[root.val] = root;
        created[cloneRoot.val] = cloneRoot;

        while (toClones.length > 0) {
            let target = toClones.shift();
            if (!target) break;

            let targetVal = target.val,
                cloning: GNode = created[targetVal]
                    ? created[targetVal]
                    : (created[targetVal] = new GNode(targetVal));

            for (const neighbor of target.neighbors) {
                let idx = neighbor.val;
                created[idx]
                    ? cloning.neighbors.push(created[idx])
                    : cloning.neighbors.push((created[idx] = new GNode(idx)));

                if (!visited[idx]) {
                    visited[idx] = neighbor;
                    toClones.push(neighbor);
                }
            }
        }
        return cloneRoot;
    }
    *DFS(nodes: GNode[] | GNode, visited: Set<GNode> = new Set<GNode>()) {
        if (!nodes) return;
        let arr = nodes instanceof GNode ? [nodes] : nodes;
        for (const visitting of arr) {
            if (visitting ? !visited.has(visitting) : false) {
                visited.add(visitting);
                yield visitting;
                yield* this.DFS(visitting.neighbors, visited);
            }
        }
    }
    *BFS(root: GNode) {
        let visited: Set<GNode> = new Set<GNode>(),
            queue: GNode[] = [root];
        visited.add(root);
        while (queue.length > 0) {
            let current = queue.shift();
            if (!current) break;

            yield current;
            for (const neighbor of current.neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
    toString(): string {
        let str: string = "";
        for (const node of this.map.values()) {
            str += node.toString() + "\n";
        }
        return str;
    }
}
let cases = [
    [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
    ],
    [[]],
    [],
];

for (const c of cases) {
    let g = new Graph(c);
    let root = g.getRoot();
    let clone = g.clone(root);
    console.log(...g.DFS(clone));
    console.log("--------------------");
}
