/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import API_BASE_URL from '../config/apiConfig';

class Api {
  static async post({
    endpoint,
    payload,
    token,
  }: {
    endpoint: string;
    payload?: unknown;
    token?: string;
  }): Promise<AxiosResponse<any, any>> {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  }

  static async get({
    endpoint,
    token,
  }: {
    endpoint: string;
    token: string;
  }): Promise<AxiosResponse<any, any>> {
    return await axios.get(`${API_BASE_URL}/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  static async delete({
    endpoint,
    token,
  }: {
    endpoint: string;
    token: string;
  }): Promise<AxiosResponse<any, any>> {
    return await axios.delete(`${API_BASE_URL}/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
export { Api };
