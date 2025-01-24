// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Documents extends APIResource {
  /**
   * Create a new document. Unlike other endpoints, this endpoint requires data to be
   * sent as `multipart/form-data` rather than JSON. The only supported file type is
   * PDF with a maximum size of 512MiB. Other file types can be uploaded (with type
   * `application/octet-stream`) but will not be processed into Tuples.
   */
  create(body: DocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.post('/documents', { body, ...options });
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

  /**
   * This endpoint returns a redirect to a signed URL to securely download the
   * document contents.
   */
  contents(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/documents/${id}/contents`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get metadata for a single document by its ID.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get(`/documents/${id}`, options);
  }

  /**
   * Extract tuples from a document by its ID. If streaming is enabled, the response
   * will be a stream of tuples as JSON server-sent events. This endpoint requires
   * calling our external inference service, and will have significant latency.
   *
   * If target_graph_owner and target_graph_name are provided as query parameters,
   * the tuples will also be inserted into the specified graph.
   */
  tuples(id: string, query?: DocumentTuplesParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  tuples(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  tuples(
    id: string,
    query: DocumentTuplesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.tuples(id, {}, query);
    }
    return this._client.get(`/documents/${id}/tuples`, {
      query,
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

export interface DocumentTuplesParams {
  /**
   * Whether to stream the tuples back as a stream of JSON server-sent events
   */
  stream?: boolean;

  /**
   * The name of the target graph to add tuples to
   */
  target_graph_name?: string | null;

  /**
   * The owner of the target graph to add tuples to
   */
  target_graph_owner?: string | null;
}

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentListResponse as DocumentListResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentTuplesParams as DocumentTuplesParams,
  };
}
