// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface HealthCheckResponse {
  health: string;
}

export interface QueryResponse {
  chains: Array<string>;
}

export interface QueryParams {
  depth: number;

  graph_names: Array<string>;

  query: string;
}

export declare namespace TopLevel {
  export {
    type HealthCheckResponse as HealthCheckResponse,
    type QueryResponse as QueryResponse,
    type QueryParams as QueryParams,
  };
}
