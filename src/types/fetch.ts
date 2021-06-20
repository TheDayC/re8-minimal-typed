import { RequestInit } from "node-fetch";

export interface IFetchOptions extends RequestInit {
    query?: any;
    timeout?: number;
    body?: any;
}