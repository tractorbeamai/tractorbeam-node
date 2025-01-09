# Shared

Types:

- <code><a href="./src/resources/shared.ts">DocumentContents</a></code>

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
- <code title="get /documents/{id}/tuples">client.documents.<a href="./src/resources/documents/documents.ts">tuples</a>(id, { ...params }) -> void</code>

## Contents

Methods:

- <code title="get /documents/{id}/contents">client.documents.contents.<a href="./src/resources/documents/contents.ts">retrieve</a>(id) -> DocumentContents</code>

# Graphs

Types:

- <code><a href="./src/resources/graphs/graphs.ts">Graph</a></code>
- <code><a href="./src/resources/graphs/graphs.ts">GraphListResponse</a></code>
- <code><a href="./src/resources/graphs/graphs.ts">GraphQueryResponse</a></code>

Methods:

- <code title="post /graphs">client.graphs.<a href="./src/resources/graphs/graphs.ts">create</a>({ ...params }) -> Graph</code>
- <code title="get /graphs/{owner}/{name}">client.graphs.<a href="./src/resources/graphs/graphs.ts">retrieve</a>(owner, name) -> Graph</code>
- <code title="get /graphs">client.graphs.<a href="./src/resources/graphs/graphs.ts">list</a>() -> GraphListResponse</code>
- <code title="delete /graphs/{owner}/{name}">client.graphs.<a href="./src/resources/graphs/graphs.ts">delete</a>(owner, name) -> void</code>
- <code title="post /graphs/{owner}/{name}/query">client.graphs.<a href="./src/resources/graphs/graphs.ts">query</a>(owner, name, { ...params }) -> GraphQueryResponse</code>

## Tuples

Types:

- <code><a href="./src/resources/graphs/tuples.ts">TupleCreateResponse</a></code>

Methods:

- <code title="post /graphs/{owner}/{name}/tuples">client.graphs.tuples.<a href="./src/resources/graphs/tuples.ts">create</a>(owner, name, { ...params }) -> TupleCreateResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthRestrictResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">restrict</a>() -> HealthRestrictResponse</code>

# Queries

Types:

- <code><a href="./src/resources/queries.ts">QueryDecodeResponse</a></code>

Methods:

- <code title="post /queries/decode">client.queries.<a href="./src/resources/queries.ts">decode</a>({ ...params }) -> QueryDecodeResponse</code>

# Query

Types:

- <code><a href="./src/resources/query.ts">QueryRestrictResponse</a></code>

Methods:

- <code title="post /query">client.query.<a href="./src/resources/query.ts">restrict</a>({ ...params }) -> QueryRestrictResponse</code>
