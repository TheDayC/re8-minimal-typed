import fetch, { RequestInit } from 'node-fetch';

import { IFetchOptions } from '../types/fetch';

function buildRequest(options: IFetchOptions): RequestInit {
    const requestInit: RequestInit = {
        body: options.method === 'POST' ? JSON.stringify(options.body) : undefined,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            ...(options.headers || {})
        },
        method: options.method || 'GET'
    };

    return requestInit;
}

export async function apiFetch<P>(url: string, options: IFetchOptions): Promise<P> {
    // Initialise request
    const requestInit = buildRequest(options);

    // Fetch a response from path with request params.
    const response = await fetch(url, requestInit);

    // Parse json from response and return.
    const body = await response.json();

    return body;
}