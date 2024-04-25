/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const nodeEdgeCost = new Map();
    for (const [from, to, price] of flights) {
        let edges = [];
        if (nodeEdgeCost.has(from)) {
            edges = nodeEdgeCost.get(from);
        }
        edges.push([to, price]);
        nodeEdgeCost.set(from, edges);
    }

    const minHeap = new MinPriorityQueue();
    const distanceFromK_Memo = new Map();

    minHeap.enqueue([src, k + 1], 0);
    while (minHeap.size()) {
        const node = minHeap.dequeue();
        const price = node.priority;
        const [to, distanceFromK] = node.element;

        distanceFromK_Memo.set(to, distanceFromK);
        if (to === dst) {
            return price;
        }
        if (distanceFromK === 0) {
            continue;
        }

        const edges = nodeEdgeCost.get(to) || [];
        for (const [outbound, out_cost] of edges) {
            if (distanceFromK_Memo.get(outbound) >= distanceFromK - 1) {
                continue;
            }
            minHeap.enqueue([outbound, distanceFromK - 1], out_cost + price)
        }
    }
    return -1;
};

//Runtime: 130ms
//Memory: 61.4 MB