import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN || '';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const defaultParams: AxiosRequestConfig = {
  timeout: 20000,
  baseURL: BASE_URL,
};

export interface CreateConfigParams<T> {
  config?: AxiosRequestConfig;
  method: AxiosRequestConfig['method'];
  data?: T;
  url: string;
}

abstract class BaseApi {
  static authToken: string = ACCESS_TOKEN;

  instance: AxiosInstance;

  defaults = axios.defaults;
  interceptors = axios.interceptors;

  protected basePath?: string;

  constructor(config: AxiosRequestConfig = defaultParams) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      BaseApi.requestInterceptorSuccess,
      BaseApi.requestInterceptorError
    );
  }

  getUri(config: AxiosRequestConfig = {}): string {
    const updatedConfig = {
      ...(config || {}),
      ...(config?.url
        ? { url: `${this.basePath}${config.url}` }
        : { url: `${this.basePath}` }),
    };

    return this.instance.getUri(updatedConfig);
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.request<T, R>(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const updatedConfig = this.createConfig({ config, url, method: 'GET' });
    return this.request<T, R>(updatedConfig);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const updatedConfig = this.createConfig({ config, url, method: 'DELETE' });
    return this.request<T, R>(updatedConfig);
  }

  head<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const updatedConfig = this.createConfig({ config, url, method: 'HEAD' });
    return this.request<T, R>(updatedConfig);
  }

  options<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const updatedConfig = this.createConfig({ config, url, method: 'OPTIONS' });
    return this.request<T, R>(updatedConfig);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const updatedConfig = this.createConfig({
      config,
      url,
      method: 'POST',
      data,
    });
    return this.request<T, R>(updatedConfig);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const updatedConfig = this.createConfig({
      config,
      url,
      method: 'PUT',
      data,
    });
    return this.request<T, R>(updatedConfig);
  }

  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const updatedConfig = this.createConfig({
      config,
      url,
      method: 'PATCH',
      data,
    });
    return this.request<T, R>(updatedConfig);
  }

  static setAuthToken(token: string) {
    BaseApi.authToken = token;
  }

  static requestInterceptorSuccess(config: AxiosRequestConfig) {
    const requestConfig = {
      ...config,
      headers: {
        ...config.headers,
        ...(BaseApi.authToken?.length
          ? {
              'x-api-key': `${BaseApi.authToken}`,
            }
          : {}),
      },
    };
    return requestConfig;
  }

  static requestInterceptorError(error: Error) {
    console.log('Request Failed', error);
    return error;
  }

  private createConfig<T>({
    config,
    url,
    method,
    data,
  }: CreateConfigParams<T>): AxiosRequestConfig {
    const updatedConfig = {
      ...(config || {}),
      url: `${this.basePath}${url}`,
      method,
      ...(data ? { data } : {}),
    };

    return updatedConfig;
  }
}

export default BaseApi;
