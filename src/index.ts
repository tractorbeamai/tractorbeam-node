// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import { HealthCheckResponse, QueryParams, QueryResponse } from './resources/top-level';
import { APIToken, APITokenCreateParams, APITokenListResponse, APITokens } from './resources/api-tokens';
import {
  Graph,
  GraphCreateParams,
  GraphListResponse,
  GraphQueryParams,
  GraphQueryResponse,
  GraphTuplesParams,
  GraphTuplesResponse,
  Graphs,
} from './resources/graphs';
import { Queries, QueryDecodeParams, QueryDecodeResponse } from './resources/queries';
import {
  Document,
  DocumentContents,
  DocumentCreateParams,
  DocumentListResponse,
  Documents,
} from './resources/documents/documents';

export interface ClientOptions {
  /**
   * The API token used for authenticating requests to the Tractorbeam API
   */
  apiToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TRACTORBEAM_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Tractorbeam API.
 */
export class Tractorbeam extends Core.APIClient {
  apiToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Tractorbeam API.
   *
   * @param {string | undefined} [opts.apiToken=process.env['API_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['TRACTORBEAM_BASE_URL'] ?? https://api.tractorbeam.ai] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('TRACTORBEAM_BASE_URL'),
    apiToken = Core.readEnv('API_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (apiToken === undefined) {
      throw new Errors.TractorbeamError(
        "The API_TOKEN environment variable is missing or empty; either provide it, or instantiate the Tractorbeam client with an apiToken option, like new Tractorbeam({ apiToken: 'My API Token' }).",
      );
    }

    const options: ClientOptions = {
      apiToken,
      ...opts,
      baseURL: baseURL || `https://api.tractorbeam.ai`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiToken = apiToken;
  }

  apiTokens: API.APITokens = new API.APITokens(this);
  documents: API.Documents = new API.Documents(this);
  graphs: API.Graphs = new API.Graphs(this);
  queries: API.Queries = new API.Queries(this);

  /**
   * This is a simple health check that does not require authentication. It is used
   * to check if the server is running and healthy.
   */
  healthCheck(options?: Core.RequestOptions): Core.APIPromise<TopLevelAPI.HealthCheckResponse> {
    return this.get('/health', options);
  }

  /**
   * Execute a natural language query across multiple graphs.
   */
  query(
    body: TopLevelAPI.QueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.QueryResponse> {
    return this.post('/query', { body, ...options });
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiToken}` };
  }

  static Tractorbeam = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static TractorbeamError = Errors.TractorbeamError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Tractorbeam.APITokens = APITokens;
Tractorbeam.Documents = Documents;
Tractorbeam.Graphs = Graphs;
Tractorbeam.Queries = Queries;
export declare namespace Tractorbeam {
  export type RequestOptions = Core.RequestOptions;

  export {
    type HealthCheckResponse as HealthCheckResponse,
    type QueryResponse as QueryResponse,
    type QueryParams as QueryParams,
  };

  export {
    APITokens as APITokens,
    type APIToken as APIToken,
    type APITokenListResponse as APITokenListResponse,
    type APITokenCreateParams as APITokenCreateParams,
  };

  export {
    Documents as Documents,
    type Document as Document,
    type DocumentContents as DocumentContents,
    type DocumentListResponse as DocumentListResponse,
    type DocumentCreateParams as DocumentCreateParams,
  };

  export {
    Graphs as Graphs,
    type Graph as Graph,
    type GraphListResponse as GraphListResponse,
    type GraphQueryResponse as GraphQueryResponse,
    type GraphTuplesResponse as GraphTuplesResponse,
    type GraphCreateParams as GraphCreateParams,
    type GraphQueryParams as GraphQueryParams,
    type GraphTuplesParams as GraphTuplesParams,
  };

  export {
    Queries as Queries,
    type QueryDecodeResponse as QueryDecodeResponse,
    type QueryDecodeParams as QueryDecodeParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  TractorbeamError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Tractorbeam;
