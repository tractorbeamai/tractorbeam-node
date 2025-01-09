// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ContentsAPI from './contents';
import { Contents } from './contents';
import * as TuplesAPI from './tuples';
import { TupleRetrieveParams, Tuples } from './tuples';

export class Documents extends APIResource {
  contents: ContentsAPI.Contents = new ContentsAPI.Contents(this._client);
  tuples: TuplesAPI.Tuples = new TuplesAPI.Tuples(this._client);

  /**
   * Create a new document. Unlike other endpoints, this endpoint requires data to be
   * sent as `multipart/form-data` rather than JSON.
   */
  create(body: DocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.post('/documents', { body, ...options });
  }

  /**
   * Get metadata for a single document by its ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get(`/documents/${id}`, options);
  }

  /**
   * List all documents for the authenticated user's organization.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DocumentListResponse> {
    return this._client.get('/documents', options);
  }

  /**
   * Delete a document by its ID.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/documents/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Document {
  /**
   * The ID of the document
   */
  id: string;

  /**
   * The date and time when the document was created in RFC 3339 format
   */
  created_at: string;

  /**
   * The size of the document in bytes
   */
  file_bytes: number;

  /**
   * The file type of the document
   */
  file_type: string;

  /**
   * The name of the document
   */
  name: string;

  /**
   * The owner of the document
   */
  owner: string;
}

export interface DocumentContents {
  /**
   * The binary contents of the document
   */
  contents: Array<number>;
}

export interface DocumentListResponse {
  documents: Array<Document>;
}

export interface DocumentCreateParams {
  /**
   * The name of the document
   */
  name: string;

  /**
   * The file content of the document
   */
  file?: Array<number> | null;

  /**
   * The text content of the document
   */
  text?: string | null;
}

Documents.Contents = Contents;
Documents.Tuples = Tuples;

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentContents as DocumentContents,
    type DocumentListResponse as DocumentListResponse,
    type DocumentCreateParams as DocumentCreateParams,
  };

  export { Contents as Contents };

  export { Tuples as Tuples, type TupleRetrieveParams as TupleRetrieveParams };
}
