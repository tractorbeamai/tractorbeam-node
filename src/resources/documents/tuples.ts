// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Tuples extends APIResource {
  /**
   * Extract tuples from a document by its ID. If streaming is enabled, the response
   * will be a stream of tuples as JSON server-sent events. This endpoint requires
   * calling our external inference service, and will have significant latency.
   */
  list(id: string, query?: TupleListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    id: string,
    query: TupleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list(id, {}, query);
    }
    return this._client.get(`/documents/${id}/tuples`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface TupleListParams {
  /**
   * Whether to stream the tuples back as a stream of JSON server-sent events
   */
  stream?: boolean;
}

export declare namespace Tuples {
  export { type TupleListParams as TupleListParams };
}
