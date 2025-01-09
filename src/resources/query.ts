// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Query extends APIResource {
  /**
   * Execute a natural language query across multiple graphs.
   */
  restrict(body: QueryRestrictParams, options?: Core.RequestOptions): Core.APIPromise<QueryRestrictResponse> {
    return this._client.post('/query', { body, ...options });
  }
}

export interface QueryRestrictResponse {
  chains: Array<string>;
}

export interface QueryRestrictParams {
  depth: number;

  graph_names: Array<string>;

  query: string;
}

export declare namespace Query {
  export {
    type QueryRestrictResponse as QueryRestrictResponse,
    type QueryRestrictParams as QueryRestrictParams,
  };
}
