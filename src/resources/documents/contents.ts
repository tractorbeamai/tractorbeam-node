// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Contents extends APIResource {
  /**
   * Get the binary contents of a document by its ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.DocumentContents> {
    return this._client.get(`/documents/${id}/contents`, options);
  }
}
