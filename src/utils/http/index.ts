import axios from "axios";
import { showMessage } from "./utils";
import { useUserStore } from "@/store";

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { IResponse } from "./type";
import type { ToastWrapperInstance } from "vant/lib/toast/types";

Toast.allowMultiple(); // 允许多个
const loadingArr: ToastWrapperInstance[] = [];

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL + "",
  timeout: 30 * 1000,
});

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.loading &&
      loadingArr.push(
        Toast.loading({
          message: "加载中...",
          duration: 0,
          forbidClick: true,
        })
      );

    const userStore = useUserStore();
    const { token } = userStore;

    if (token && config.headers) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    response.config.loading && clearLoading();
    if (response.status === 200 && response.data.code === "00000") {
      return response;
    }
    Toast(response.data.message);
    return Promise.reject(response.data);
  },
  // 请求失败
  (error: any) => {
    error.config.loading && clearLoading();
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status);
      return Promise.reject(response.data);
    }
    showMessage("网络连接异常,请稍后再试!");
  }
);

const request = <T>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve) => {
    !config.hasOwnProperty("loading") && (config.loading = true);
    axiosInstance
      .request<T, AxiosResponse<IResponse>>(config)
      .then((res: AxiosResponse<IResponse>) => {
        const {
          data: { param },
        } = res;
        resolve(param as T);
      });
  });
};

// 清空加载框
const clearLoading = () => {
  if (loadingArr.length) {
    loadingArr[loadingArr.length - 1].clear();
    loadingArr.pop();
  }
};

export default request;
export type { AxiosInstance, AxiosResponse };
