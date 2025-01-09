// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Graphs extends APIResource {
  /**
   * Create a new graph.
   */
  create(body: GraphCreateParams, options?: Core.RequestOptions): Core.APIPromise<Graph> {
    return this._client.post('/graphs', { body, ...options });
  }

  /**
   * Get a graph by its owner and name.
   */
  retrieve(owner: string, name: string, options?: Core.RequestOptions): Core.APIPromise<Graph> {
    return this._client.get(`/graphs/${owner}/${name}`, options);
  }

  /**
   * List all graphs for the authenticated user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<GraphListResponse> {
    return this._client.get('/graphs', options);
  }

  /**
   * Delete an existing graph and all of its tuples.
   */
  delete(owner: string, name: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/graphs/${owner}/${name}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Query tuples from an existing graph using a SPARQL query.
   */
  query(
    owner: string,
    name: string,
    body: GraphQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GraphQueryResponse> {
    return this._client.post(`/graphs/${owner}/${name}/query`, { body, ...options });
  }

  /**
   * Insert tuples into an existing graph.
   */
  tuples(
    owner: string,
    name: string,
    body: GraphTuplesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GraphTuplesResponse> {
    return this._client.post(`/graphs/${owner}/${name}/tuples`, { body, ...options });
  }
}

export interface Graph {
  /**
   * The creation timestamp in ISO 8601 format
   */
  created_at: string;

  /**
   * The name of the graph, must match regex: ^[\w\.-]{1,64}$
   */
  name: string;

  /**
   * The owner of the graph, in the format "user*{id}" or "org*{id}"
   */
  owner: string;

  /**
   * The number of tuples in the graph
   */
  tuple_count?: number | null;
}

export interface GraphListResponse {
  graphs: Array<Graph>;
}

export interface GraphQueryResponse {
  bindings: Array<Record<string, string>>;
}

export interface GraphTuplesResponse {
  /**
   * The number of tuples inserted
   */
  inserted: number;
}

export interface GraphCreateParams {
  name: string;
}

export interface GraphQueryParams {
  sparql: string;
}

export interface GraphTuplesParams {
  tuples: Array<GraphTuplesParams.Tuple>;

  embeddings?: Array<Array<number>> | null;
}

export namespace GraphTuplesParams {
  export interface Tuple {
    /**
     * The object of the tuple
     */
    object: string;

    /**
     * The predicate of the tuple
     */
    predicate: string;

    /**
     * The subject of the tuple
     */
    subject: string;
  }
}

export declare namespace Graphs {
  export {
    type Graph as Graph,
    type GraphListResponse as GraphListResponse,
    type GraphQueryResponse as GraphQueryResponse,
    type GraphTuplesResponse as GraphTuplesResponse,
    type GraphCreateParams as GraphCreateParams,
    type GraphQueryParams as GraphQueryParams,
    type GraphTuplesParams as GraphTuplesParams,
  };
}
