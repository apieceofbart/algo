export class Vertex {
  neighbors: Vertex[] = [];
  value: string;
  constructor(value: string) {
    this.value = value;
  }

  connect(neighbor: Vertex) {
    this.neighbors.push(neighbor);
    neighbor.neighbors.push(this);
  }
}

class Graph {
  vertices: Vertex[];
  constructor(vertices: Vertex[]) {
    this.vertices = vertices;
  }
}

export class BFSGraph extends Graph {
  bfs(start: Vertex) {
    const queue = [start];
    const visited = new Set<Vertex>(queue);
    while (queue.length) {
      const current = queue.shift()!;
      console.log(`Visiting ${current.value}`);
      for (const n of current.neighbors) {
        if (!visited.has(n)) {
          queue.push(n);
          visited.add(n);
        }
      }
    }
  }

  shortestPath(start: Vertex, end: Vertex) {
    const queue = [start];
    const visited: Record<string, string[]> = {
      [start.value]: [start.value],
    };
    while (queue.length) {
      const current = queue.shift()!;
      if (current === end) {
        return visited[current.value];
      }
      for (const n of current.neighbors) {
        if (visited[n.value] === undefined) {
          queue.push(n);
          visited[n.value] = visited[current.value].concat(n.value);
        }
      }
    }
  }
}
