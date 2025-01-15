// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tractorbeam from 'tractorbeam';
import { Response } from 'node-fetch';

const client = new Tractorbeam({
  apiToken: 'My API Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.documents.create({ name: 'my_document.txt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.documents.create({
      name: 'my_document.txt',
      file: [0],
      text: 'Hello world',
    });
  });

  test('list', async () => {
    const responsePromise = client.documents.list();
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
    await expect(client.documents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Tractorbeam.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.documents.delete('doc_2yYISEvrO9LrLAOJjnw27');
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
      client.documents.delete('doc_2yYISEvrO9LrLAOJjnw27', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });

  test('contents', async () => {
    const responsePromise = client.documents.contents('doc_2yYISEvrO9LrLAOJjnw27');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('contents: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.documents.contents('doc_2yYISEvrO9LrLAOJjnw27', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.documents.get('doc_2yYISEvrO9LrLAOJjnw27');
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
      client.documents.get('doc_2yYISEvrO9LrLAOJjnw27', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });

  test('tuples', async () => {
    const responsePromise = client.documents.tuples('doc_2yYISEvrO9LrLAOJjnw27');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tuples: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.documents.tuples('doc_2yYISEvrO9LrLAOJjnw27', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });

  test('tuples: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.documents.tuples(
        'doc_2yYISEvrO9LrLAOJjnw27',
        { stream: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Tractorbeam.NotFoundError);
  });
});
