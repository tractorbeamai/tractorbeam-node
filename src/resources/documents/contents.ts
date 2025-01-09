// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Contents extends APIResource {
  /**
   * Get the binary contents of a document by its ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DocumentContents> {
    return this._client.get(`/documents/${id}/contents`, options);
  }
}

export interface DocumentContents {
  /**
   * The binary contents of the document
   */
  contents: Array<number>;
}

export declare namespace Contents {
  export { type DocumentContents as DocumentContents };
}
