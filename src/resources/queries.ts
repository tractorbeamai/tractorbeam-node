// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Queries extends APIResource {
  /**
   * Execute a keyword branch query across multiple graphs, extracting keywords from
   * natural language and exploring the graph structure around those keywords.
   */
  decode(body: QueryDecodeParams, options?: Core.RequestOptions): Core.APIPromise<QueryDecodeResponse> {
    return this._client.post('/queries/decode', { body, ...options });
  }

  /**
   * Execute a natural language query across multiple graphs.
   */
  query(body: QueryQueryParams, options?: Core.RequestOptions): Core.APIPromise<QueryQueryResponse> {
    return this._client.post('/query', { body, ...options });
  }
}

export interface QueryDecodeResponse {
  chains: Array<string>;
}

export interface QueryQueryResponse {
  chains: Array<string>;
}

export interface QueryDecodeParams {
  depth: number;

  graph_names: Array<string>;

  query: string;
}

export interface QueryQueryParams {
  depth: number;

  graph_names: Array<string>;

  query: string;
}

export declare namespace Queries {
  export {
    type QueryDecodeResponse as QueryDecodeResponse,
    type QueryQueryResponse as QueryQueryResponse,
    type QueryDecodeParams as QueryDecodeParams,
    type QueryQueryParams as QueryQueryParams,
  };
}
