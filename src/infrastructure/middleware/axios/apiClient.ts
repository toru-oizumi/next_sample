import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';

import axios, { AxiosInstance, AxiosResponse, ResponseType } from 'axios';

export class ApiClient {
  private readonly instance: AxiosInstance;

  /**
   * @param baseUrl ApiのURL prefix
   */
  public constructor(baseUrl = '') {
    if (process.env.NEXT_PUBLIC_API_ORIGIN == null) {
      throw new Error('NEXT_PUBLIC_API_ORIGIN is not set.');
    } else {
      const httpAgent = new HttpAgent({ keepAlive: true });
      const httpsAgent = new HttpsAgent({ keepAlive: true });
      this.instance = axios.create({
        httpAgent,
        httpsAgent,
        withCredentials: true,
        baseURL: process.env.NEXT_PUBLIC_API_ORIGIN + baseUrl,
      });
    }
  }

  /**
   * ApiへのPOSTリクエストを実行する
   *
   * @param path Apiのパス (baseUrlからの相対パス)
   * @param data POSTデータ(JSONシリアライズ可能なオブジェクト)
   * @param multiPartForm content-typeにmultipart/form-dataを指定する。
   */
  public post(
    path: string,
    data: { [key: string]: any } | null = null, // eslint-disable-line @typescript-eslint/no-explicit-any
    multiPartForm = false,
  ): Promise<AxiosResponse> {
    const options: { headers: { [key: string]: string } } = {
      headers: {},
    };
    if (multiPartForm) {
      options.headers['content-type'] = 'multipart/form-data';
    }
    return this.instance.post(path, data, options);
  }

  /**
   * ApiへのPUTリクエストを実行する
   *
   * @param path Apiのパス (baseUrlからの相対パス)
   * @param data PUTデータ(JSONシリアライズ可能なオブジェクト)
   * @param multiPartForm content-typeにmultipart/form-dataを指定する。
   */
  public put(
    path: string,
    data: { [key: string]: any } | null = null, // eslint-disable-line @typescript-eslint/no-explicit-any
    multiPartForm = false,
  ): Promise<AxiosResponse> {
    const options: { headers: { [key: string]: string } } = {
      headers: {},
    };
    if (multiPartForm) {
      options.headers['content-type'] = 'multipart/form-data';
    }
    return this.instance.put(path, data, options);
  }

  /**
   * ApiへのPATCHリクエストを実行する
   *
   * @param path Apiのパス (baseUrlからの相対パス)
   * @param data PATCHデータ(JSONシリアライズ可能なオブジェクト)
   * @param multiPartForm content-typeにmultipart/form-dataを指定する。
   */
  public patch(
    path: string,
    data: { [key: string]: any } | null = null, // eslint-disable-line @typescript-eslint/no-explicit-any
    multiPartForm = false,
  ): Promise<AxiosResponse> {
    const options: { headers: { [key: string]: string } } = {
      headers: {},
    };
    if (multiPartForm) {
      options.headers['content-type'] = 'multipart/form-data';
    }
    return this.instance.patch(path, data, options);
  }

  /**
   * ApiへのDELETEリクエストを実行する
   *
   * @param path Apiのパス (baseUrlからの相対パス)
   * @param multiPartForm content-typeにmultipart/form-dataを指定する。
   */
  public delete(path: string, multiPartForm = false): Promise<AxiosResponse> {
    const options: { headers: { [key: string]: string } } = {
      headers: {},
    };
    if (multiPartForm) {
      options.headers['content-type'] = 'multipart/form-data';
    }
    return this.instance.delete(path, options);
  }

  /**
   * ApiへのGETリクエストを実行する
   *
   * @param path Apiのパス (baseUrlからの相対パス)
   * @param params GETパラメータ(object)
   */
  public get(
    path: string,
    params: { [key: string]: string | number | boolean } | null = null,
  ): Promise<AxiosResponse> {
    const options: {
      headers: { [key: string]: string };
      params: { [key: string]: string | number | boolean } | null;
    } = {
      headers: {},
      params: null,
    };
    if (params) {
      options.params = params;
    }
    return this.instance.get(path, options);
  }

  /**
   * ApiへファイルダウンロードのGETリクエストを実行する
   *
   * @param path Apiのパス (baseUrlからの相対パス)
   * @param params GETパラメータ(object)
   */
  public fileDownload(
    path: string,
    params: { [key: string]: string | number | boolean } | null = null,
  ): Promise<AxiosResponse> {
    const options: {
      headers: { [key: string]: string };
      params: { [key: string]: string | number | boolean } | null;
      responseType: ResponseType;
    } = {
      headers: {},
      params: null,
      responseType: 'blob',
    };
    if (params) {
      options.params = params;
    }
    return this.instance.get(path, options);
  }
}
