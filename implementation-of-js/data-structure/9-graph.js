// class Vertex {
//     constructor(label) { 
//         this.lebel = lebel;
//     }
// }

class Graph {
    constructor(vertexes) { 
        this.vertexes = new Array(vertexes);
        this.edges = 0;
        this.adjacencyList = []; // 邻接表
        for (let i = 0; i < this.vertexes.length; i++) {
            this.adjacencyList[i] = [];
        }

        // mark for is visited in depthFirstSearch.
        this.visited = [];
        for (let i = 0; i < this.vertexes.length; i++) {
            this.visited[i] = false;
        }
    }

    addEdge(sv, ev) {
        this.adjacencyList[sv].push(ev);
        this.adjacencyList[ev].push(sv);
        this.edges++;
    }

    depthFirstSearch(vertex) {
        this.visited[vertex] = true;
        if (this.adjacencyList[vertex] !== undefined) {
            console.log("Visited vertex: " + vertex);
        }
        for (let v of this.adjacencyList[vertex]) {
            if (!this.visited[v]) {
                this.depthFirstSearch(v);
            }
        }
    }

    broadFirstSearch(vertex) {
        const queue = [],
            visited = [];
        for (let i = 0; i < this.vertexes.length; i++) {
            visited[i] = false;
        }
        queue.push(vertex);
        while (queue.length > 0) {
            const v = queue.shift();
            if (v !== void 0) {
                console.log("Visited vertex: " + v);
                visited[v] = true;
            }
            for (let x of this.adjacencyList[v]) {
                if (!visited[x]) {
                    queue.push(x);
                }
            }
        }
    }

    show() {
        console.dir(this.adjacencyList);
        for (let i = 0; i < this.adjacencyList.length; i++) {
            console.log(i + ": ");
            for (let j = 0; j < this.adjacencyList[i].length; j++) {
                console.log("  " + this.adjacencyList[i][j]);
            }
        }
    }
}

(function() {
    const g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.show();
    console.log('depth first search: ');
    g.depthFirstSearch(0);
    console.log('broad first search: ');
    g.broadFirstSearch(0);
})();