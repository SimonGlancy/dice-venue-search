import BaseApi from './base';
import axios from 'axios';

jest.mock('axios', () => {
  const axios = jest.requireActual('axios');
  const mockedAxios = {
    ...axios,
    request: jest.fn(() => Promise.resolve({ data: 'here' })),
  };
  return {
    ...mockedAxios,
    create: () => mockedAxios,
  };
});

export const axiosMock = axios as jest.Mocked<typeof axios>;

const TEST_PATH = '/testPath';

class TestApi extends BaseApi {
  protected basePath = TEST_PATH;
}

describe('BaseApi', () => {
  it('GET Calls the underlying Api class request function', async () => {
    const topPath = 'test';
    const baseApi = new TestApi();

    await baseApi.get('/test');

    const testConfig = { method: 'GET', url: `${TEST_PATH}/${topPath}` };

    expect(axiosMock.request).toHaveBeenCalledWith(testConfig);
  });

  it('POST Calls the underlying Api class request function', async () => {
    const topPath = 'test';
    const baseApi = new TestApi();

    await baseApi.post('/test', { test: 'test' });

    const testConfig = {
      method: 'POST',
      url: `${TEST_PATH}/${topPath}`,
      data: { test: 'test' },
    };

    expect(axiosMock.request).toHaveBeenCalledWith(testConfig);
  });

  it('DELETE Calls the underlying Api class request function', async () => {
    const topPath = 'test';
    const baseApi = new TestApi();

    await baseApi.delete('/test');

    const testConfig = { method: 'DELETE', url: `${TEST_PATH}/${topPath}` };

    expect(axiosMock.request).toHaveBeenCalledWith(testConfig);
  });

  it('HEAD Calls the underlying Api class request function', async () => {
    const topPath = 'test';
    const baseApi = new TestApi();

    await baseApi.head('/test');

    const testConfig = { method: 'HEAD', url: `${TEST_PATH}/${topPath}` };

    expect(axiosMock.request).toHaveBeenCalledWith(testConfig);
  });

  it('OPTIONS Calls the underlying Api class request function', async () => {
    const topPath = 'test';
    const baseApi = new TestApi();

    await baseApi.options('/test');

    const testConfig = { method: 'OPTIONS', url: `${TEST_PATH}/${topPath}` };

    expect(axiosMock.request).toHaveBeenCalledWith(testConfig);
  });

  it('PUT Calls the underlying Api class request function', async () => {
    const topPath = 'test';
    const baseApi = new TestApi();

    await baseApi.put('/test', { test: 'test' });

    const testConfig = {
      method: 'PUT',
      url: `${TEST_PATH}/${topPath}`,
      data: { test: 'test' },
    };

    expect(axiosMock.request).toHaveBeenCalledWith(testConfig);
  });

  it('PATCH Calls the underlying Api class request function', async () => {
    const topPath = 'test';
    const baseApi = new TestApi();

    await baseApi.patch('/test', { test: 'test' });

    const testConfig = {
      method: 'PATCH',
      url: `${TEST_PATH}/${topPath}`,
      data: { test: 'test' },
    };

    expect(axiosMock.request).toHaveBeenCalledWith(testConfig);
  });
});
