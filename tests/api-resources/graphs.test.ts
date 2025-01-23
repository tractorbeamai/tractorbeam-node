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

  test('addTuples: only required params', async () => {
    const responsePromise = client.graphs.addTuples('graph-owner', 'graph-name', {
      tuples: [{ object: 'Company1', predicate: 'worksAt', subject: 'Person1' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addTuples: required and optional params', async () => {
    const response = await client.graphs.addTuples('graph-owner', 'graph-name', {
      tuples: [{ object: 'Company1', predicate: 'worksAt', subject: 'Person1' }],
      embeddings: [[0]],
    });
  });

  test('get', async () => {
    const responsePromise = client.graphs.get('org_2nlswGH0pZ1V1OlHYAUwQG6TVBx', 'my_graph');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.graphs.get('org_2nlswGH0pZ1V1OlHYAUwQG6TVBx', 'my_graph', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });

  test('getTuples', async () => {
    const responsePromise = client.graphs.getTuples('owner', 'name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getTuples: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.graphs.getTuples('owner', 'name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });
});
