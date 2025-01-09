// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tractorbeam from 'tractorbeam';
import { Response } from 'node-fetch';

const client = new Tractorbeam({
  apiToken: 'My API Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  test('restrict: only required params', async () => {
    const responsePromise = client.query.restrict({ depth: 0, graph_names: ['string'], query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('restrict: required and optional params', async () => {
    const response = await client.query.restrict({ depth: 0, graph_names: ['string'], query: 'query' });
  });
});
