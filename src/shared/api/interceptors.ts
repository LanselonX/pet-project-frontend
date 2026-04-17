import axios, { AxiosResponse } from "axios";
import { api } from "./api";

let refreshPromise: Promise<AxiosResponse> | null = null;

const refresTokenhUrl = process.env.NEXT_PUBLIC_REFRESH_URL!;

const refreshToken = () =>
  axios
    .get(refresTokenhUrl, {
      withCredentials: true,
    })
    .finally(() => {
      refreshPromise = null;
    });

export const setupInterceptors = () =>
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const config = error.config;
      if (error.response.status === 401 && !config._retry) {
        config._retry = true;

        try {
          if (!refreshPromise) refreshPromise = refreshToken();
          await refreshPromise;

          return api(config);
        } catch {
          window.location.href = "/auth";
        }
      }
      return Promise.reject(error);
    },
  );
