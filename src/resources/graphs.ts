// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Graphs extends APIResource {
  /**
   * Create a new graph.
   */
  create(body: GraphCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/graphs', { body, ...options });
  }
}

export type GraphCreateResponse = unknown;

export type GraphCreateParams = unknown;

export declare namespace Graphs {
  export { type GraphCreateResponse as GraphCreateResponse, type GraphCreateParams as GraphCreateParams };
}
