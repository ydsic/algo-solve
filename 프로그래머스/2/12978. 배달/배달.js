function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const visited = Array(N + 1).fill(false);
  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;

  for (let i = 1; i <= N; i++) {
    let minDist = Infinity;
    let now = -1;

    for (let j = 1; j <= N; j++) {
      if (!visited[j] && dist[j] < minDist) {
        minDist = dist[j];
        now = j;
      }
    }

    if (now === -1) break;
    visited[now] = true;

    for (const [next, cost] of graph[now]) {
      if (dist[now] + cost < dist[next]) {
        dist[next] = dist[now] + cost;
      }
    }
  }

  return dist.filter((d) => d <= K).length;
}
