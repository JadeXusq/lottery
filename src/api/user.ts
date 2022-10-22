import http from "@/utils/http";
import type { ILoginRequest, ILoginResponse, IUserInfo } from "@/types/user";

// 登录
export function login(data: ILoginRequest, loading = true) {
  return http<ILoginResponse>({
    url: "/user/login",
    method: "POST",
    data,
    loading,
  });
}

// 获取用户信息
export function getUserInfo(loading = false) {
  return http<IUserInfo>({
    url: "/user/getUserInfo",
    method: "GET",
    loading,
  });
}
