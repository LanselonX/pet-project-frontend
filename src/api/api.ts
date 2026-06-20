import axios from "axios";
import { setupInterceptors } from "./interceptors";

const baseUr =
  typeof window === "undefined"
    ? process.env.API_PROXY_DESTINATION
    : process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: baseUr,
  withCredentials: true,
});

setupInterceptors();
