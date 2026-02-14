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
    breadthFirstSearch(start){
        const queue = [start];
        const visited = {};
        const result = [];

        visited[start] = true;

        while(queue.length){
            let currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        
        }
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

console.log(g.breadthFirstSearch("A"))

