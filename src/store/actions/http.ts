import API_BASE_URL from '../../api-base-url';

export const fetcher = <T = any>(
  input: Request | string,
  init: any
): Promise<T> => {
  return fetch(input, init).then((r) => {
    if (r.ok) return r.json();
    return r.json().then((body) => {
      throw new Error(body.error || r.statusText);
    });
  });
};

const http = {
  post(url: string, json: any) {
    return fetcher(API_BASE_URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
      credentials: 'include',
      mode: 'cors',
    });
  },
  get(u: string, query?: any) {
    const url = new URL(API_BASE_URL + u);
    url.search = new URLSearchParams(query).toString();

    return fetcher(url.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
    });
  },
  put(url: string) {
    return fetcher(API_BASE_URL + url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
    });
  },
  delete(url: string) {
    return fetcher(API_BASE_URL + url, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
    });
  },
};

export default http;
