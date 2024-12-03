// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Health extends APIResource {
  /**
   * This is a simple health check that does not require authentication. It is used
   * to check if the server is running and healthy.
   */
  status(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/health', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
