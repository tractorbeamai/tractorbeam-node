// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Queries extends APIResource {
  /**
   * Execute a natural language query across multiple graphs.
   */
  create(body: QueryCreateParams, options?: Core.RequestOptions): Core.APIPromise<QueryCreateResponse> {
    return this._client.post('/query', { body, ...options });
  }

  /**
   * Execute a keyword branch query across multiple graphs, extracting keywords from
   * natural language and exploring the graph structure around those keywords.
   */
  decode(body: QueryDecodeParams, options?: Core.RequestOptions): Core.APIPromise<QueryDecodeResponse> {
    return this._client.post('/queries/decode', { body, ...options });
  }
}

export interface QueryCreateResponse {
  chains: Array<string>;
}

export interface QueryDecodeResponse {
  chains: Array<string>;
}

export interface QueryCreateParams {
  depth: number;

  graph_names: Array<string>;

  query: string;
}

export interface QueryDecodeParams {
  depth: number;

  graph_names: Array<string>;

  query: string;
}

export declare namespace Queries {
  export {
    type QueryCreateResponse as QueryCreateResponse,
    type QueryDecodeResponse as QueryDecodeResponse,
    type QueryCreateParams as QueryCreateParams,
    type QueryDecodeParams as QueryDecodeParams,
  };
}
