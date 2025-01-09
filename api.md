# APITokens

Types:

- <code><a href="./src/resources/api-tokens.ts">APIToken</a></code>
- <code><a href="./src/resources/api-tokens.ts">APITokenListResponse</a></code>

Methods:

- <code title="post /api-tokens">client.apiTokens.<a href="./src/resources/api-tokens.ts">create</a>({ ...params }) -> APIToken</code>
- <code title="get /api-tokens/{id}">client.apiTokens.<a href="./src/resources/api-tokens.ts">retrieve</a>(id) -> APIToken</code>
- <code title="get /api-tokens">client.apiTokens.<a href="./src/resources/api-tokens.ts">list</a>() -> APITokenListResponse</code>
- <code title="delete /api-tokens/{id}">client.apiTokens.<a href="./src/resources/api-tokens.ts">delete</a>(id) -> void</code>

# Documents

Types:

- <code><a href="./src/resources/documents/documents.ts">Document</a></code>
- <code><a href="./src/resources/documents/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="post /documents">client.documents.<a href="./src/resources/documents/documents.ts">create</a>({ ...params }) -> Document</code>
- <code title="get /documents/{id}">client.documents.<a href="./src/resources/documents/documents.ts">retrieve</a>(id) -> Document</code>
- <code title="get /documents">client.documents.<a href="./src/resources/documents/documents.ts">list</a>() -> DocumentListResponse</code>
- <code title="delete /documents/{id}">client.documents.<a href="./src/resources/documents/documents.ts">delete</a>(id) -> void</code>

## Contents

Types:

- <code><a href="./src/resources/documents/contents.ts">DocumentContents</a></code>

Methods:

- <code title="get /documents/{id}/contents">client.documents.contents.<a href="./src/resources/documents/contents.ts">retrieve</a>(id) -> DocumentContents</code>

## Tuples

Methods:

- <code title="get /documents/{id}/tuples">client.documents.tuples.<a href="./src/resources/documents/tuples.ts">retrieve</a>(id, { ...params }) -> void</code>

# Graphs

Types:

- <code><a href="./src/resources/graphs.ts">Graph</a></code>
- <code><a href="./src/resources/graphs.ts">GraphListResponse</a></code>
- <code><a href="./src/resources/graphs.ts">GraphQueryResponse</a></code>
- <code><a href="./src/resources/graphs.ts">GraphTuplesResponse</a></code>

Methods:

- <code title="post /graphs">client.graphs.<a href="./src/resources/graphs.ts">create</a>({ ...params }) -> Graph</code>
- <code title="get /graphs/{owner}/{name}">client.graphs.<a href="./src/resources/graphs.ts">retrieve</a>(owner, name) -> Graph</code>
- <code title="get /graphs">client.graphs.<a href="./src/resources/graphs.ts">list</a>() -> GraphListResponse</code>
- <code title="delete /graphs/{owner}/{name}">client.graphs.<a href="./src/resources/graphs.ts">delete</a>(owner, name) -> void</code>
- <code title="post /graphs/{owner}/{name}/query">client.graphs.<a href="./src/resources/graphs.ts">query</a>(owner, name, { ...params }) -> GraphQueryResponse</code>
- <code title="post /graphs/{owner}/{name}/tuples">client.graphs.<a href="./src/resources/graphs.ts">tuples</a>(owner, name, { ...params }) -> GraphTuplesResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Queries

Types:

- <code><a href="./src/resources/queries.ts">QueryDecodeResponse</a></code>
- <code><a href="./src/resources/queries.ts">QueryQueryResponse</a></code>

Methods:

- <code title="post /queries/decode">client.queries.<a href="./src/resources/queries.ts">decode</a>({ ...params }) -> QueryDecodeResponse</code>
- <code title="post /query">client.queries.<a href="./src/resources/queries.ts">query</a>({ ...params }) -> QueryQueryResponse</code>
