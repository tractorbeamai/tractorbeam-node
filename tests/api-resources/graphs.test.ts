// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tractorbeam from 'tractorbeam';
import { Response } from 'node-fetch';

const client = new Tractorbeam({
  apiToken: 'My API Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource graphs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.graphs.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.graphs.create({ name: 'name' });
  });

  test('retrieve', async () => {
    const responsePromise = client.graphs.retrieve('org_2nlswGH0pZ1V1OlHYAUwQG6TVBx', 'my_graph');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.graphs.retrieve('org_2nlswGH0pZ1V1OlHYAUwQG6TVBx', 'my_graph', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.graphs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.graphs.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Tractorbeam.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.graphs.delete('org_2nlswGH0pZ1V1OlHYAUwQG6TVBx', 'my_graph');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.graphs.delete('org_2nlswGH0pZ1V1OlHYAUwQG6TVBx', 'my_graph', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });

  test('query: only required params', async () => {
    const responsePromise = client.graphs.query('graph-owner', 'graph-name', { sparql: 'sparql' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.graphs.query('graph-owner', 'graph-name', { sparql: 'sparql' });
  });

  test('tuples: only required params', async () => {
    const responsePromise = client.graphs.tuples('graph-owner', 'graph-name', {
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

  test('tuples: required and optional params', async () => {
    const response = await client.graphs.tuples('graph-owner', 'graph-name', {
      tuples: [{ object: 'Tractorbeam', predicate: 'works_at', subject: 'Wade' }],
      embeddings: [[0]],
    });
  });
});
