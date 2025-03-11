# Documents

Types:

- <code><a href="./src/resources/documents.ts">Document</a></code>
- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="post /documents">client.documents.<a href="./src/resources/documents.ts">create</a>({ ...params }) -> Document</code>
- <code title="get /documents">client.documents.<a href="./src/resources/documents.ts">list</a>() -> DocumentListResponse</code>
- <code title="delete /documents/{id}">client.documents.<a href="./src/resources/documents.ts">delete</a>(id) -> void</code>
- <code title="get /documents/{id}/contents">client.documents.<a href="./src/resources/documents.ts">contents</a>(id) -> void</code>
- <code title="get /documents/{id}">client.documents.<a href="./src/resources/documents.ts">get</a>(id) -> Document</code>
- <code title="get /documents/{id}/tuples">client.documents.<a href="./src/resources/documents.ts">tuples</a>(id, { ...params }) -> void</code>

# Graphs

Types:

- <code><a href="./src/resources/graphs.ts">Graph</a></code>
- <code><a href="./src/resources/graphs.ts">GraphListResponse</a></code>
- <code><a href="./src/resources/graphs.ts">GraphAddTuplesResponse</a></code>
- <code><a href="./src/resources/graphs.ts">GraphGetTuplesResponse</a></code>

Methods:

- <code title="post /graphs">client.graphs.<a href="./src/resources/graphs.ts">create</a>({ ...params }) -> Graph</code>
- <code title="get /graphs">client.graphs.<a href="./src/resources/graphs.ts">list</a>() -> GraphListResponse</code>
- <code title="delete /graphs/{owner}/{name}">client.graphs.<a href="./src/resources/graphs.ts">delete</a>(owner, name) -> void</code>
- <code title="post /graphs/{owner}/{name}/tuples">client.graphs.<a href="./src/resources/graphs.ts">addTuples</a>(owner, name, { ...params }) -> GraphAddTuplesResponse</code>
- <code title="get /graphs/{owner}/{name}">client.graphs.<a href="./src/resources/graphs.ts">get</a>(owner, name) -> Graph</code>
- <code title="get /graphs/{owner}/{name}/tuples">client.graphs.<a href="./src/resources/graphs.ts">getTuples</a>(owner, name) -> GraphGetTuplesResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Queries
