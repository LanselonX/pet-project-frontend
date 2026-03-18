import axios from "axios";
import { setupInterceptors } from "./interceptors";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

setupInterceptors();
