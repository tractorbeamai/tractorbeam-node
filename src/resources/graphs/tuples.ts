// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Tuples extends APIResource {
  /**
   * Insert tuples into an existing graph.
   */
  create(
    owner: string,
    name: string,
    body: TupleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TupleCreateResponse> {
    return this._client.post(`/graphs/${owner}/${name}/tuples`, { body, ...options });
  }
}

export interface TupleCreateResponse {
  /**
   * The number of tuples inserted
   */
  inserted: number;
}

export interface TupleCreateParams {
  tuples: Array<TupleCreateParams.Tuple>;

  embeddings?: Array<Array<number>> | null;
}

export namespace TupleCreateParams {
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

export declare namespace Tuples {
  export { type TupleCreateResponse as TupleCreateResponse, type TupleCreateParams as TupleCreateParams };
}
