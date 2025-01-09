// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tractorbeam from 'tractorbeam';
import { Response } from 'node-fetch';

const client = new Tractorbeam({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiTokens', () => {
  test('create: only required params', async () => {
    const responsePromise = client.apiTokens.create({ name: 'my_api_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.apiTokens.create({ name: 'my_api_token' });
  });

  test('retrieve', async () => {
    const responsePromise = client.apiTokens.retrieve('token_123');
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
      client.apiTokens.retrieve('token_123', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.apiTokens.list();
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
    await expect(client.apiTokens.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Tractorbeam.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.apiTokens.delete('token_123');
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
    await expect(client.apiTokens.delete('token_123', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Tractorbeam.NotFoundError,
    );
  });
});
