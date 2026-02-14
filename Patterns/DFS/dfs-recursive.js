class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    depthFirstSearch(start){
        const result = [];
        const visited = {};

        let adj = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;

            result.push(vertex);
            visited[vertex] = true;

            adj[vertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    dfs(neighbor)
                }
            })
        })(start);

        return result;
    }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A","B");
g.addEdge("A","F");
g.addEdge("B","C");
g.addEdge("B","D");
g.addEdge("C","D");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(g.depthFirstSearch("A"))






