// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tractorbeam from 'tractorbeam';
import { Response } from 'node-fetch';

const client = new Tractorbeam({
  apiToken: 'My API Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tuples', () => {
  test('create: only required params', async () => {
    const responsePromise = client.graphs.tuples.create('graph-owner', 'graph-name', {
      tuples: [{ object: 'Tractorbeam', predicate: 'works_at', subject: 'Wade' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.graphs.tuples.create('graph-owner', 'graph-name', {
      tuples: [{ object: 'Tractorbeam', predicate: 'works_at', subject: 'Wade' }],
      embeddings: [[0]],
    });
  });
});
