// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class APITokens extends APIResource {
  /**
   * Create a new API token for the authenticated organization.
   */
  create(body: APITokenCreateParams, options?: Core.RequestOptions): Core.APIPromise<APIToken> {
    return this._client.post('/api-tokens', { body, ...options });
  }

  /**
   * Get an API token by its ID (e.g. `token_123`). The token must belong to the
   * authenticated user's organization.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<APIToken> {
    return this._client.get(`/api-tokens/${id}`, options);
  }

  /**
   * List all API tokens for the authenticated user's organization.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<APITokenListResponse> {
    return this._client.get('/api-tokens', options);
  }

  /**
   * Revoke a specific API Token for the authenticated organization. After
   * revocation, the token will no longer be valid and cannot be used to authenticate
   * requests.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api-tokens/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface APIToken {
  /**
   * The ID of the API token. Starts with prefix `token_`.
   */
  id: string;

  /**
   * The date and time when the API token was created in
   * [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) format.
   */
  created_at: string;

  /**
   * The human-readable name of the API token.
   */
  name: string;

  /**
   * The owner of the API token, either an organization or a user.
   */
  owner: string;

  /**
   * The 8-character prefix of the token itself.
   */
  token_prefix: string;
}

export interface APITokenListResponse {
  api_tokens: Array<APIToken>;
}

export interface APITokenCreateParams {
  /**
   * The name that will be used to identify the API token.
   */
  name: string;
}

export declare namespace APITokens {
  export {
    type APIToken as APIToken,
    type APITokenListResponse as APITokenListResponse,
    type APITokenCreateParams as APITokenCreateParams,
  };
}
