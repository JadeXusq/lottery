import { login, getUserInfo } from "@/api/user";

import type { IUserState, ILoginRequest } from "@/types/user";

export const useUserStore = defineStore("user", {
  state: (): IUserState => ({
    token: "",
    userInfo: {},
  }),
  getters: {
    userName: (state) => state.userInfo.userName,
    phone: (state) => state.userInfo.phone,
  },
  actions: {
    // 登录
    login(data: ILoginRequest) {
      return login(data).then((res) => {
        this.token = res.token;

        this.userInfo = {
          userName: data.userName,
          phone: data.phone,
        };
      });
    },
    // 获取用户信息
    getUserInfo() {
      return getUserInfo().then((res) => {
        this.userInfo = res;
      });
    },
    // 清空用户数据
    loginOut() {
      return new Promise((resolve) => {
        this.token = "";
        this.userInfo = {};
        resolve({});
      });
    },
  },
  persist: {
    key: "user",
    paths: ["userInfo", "token"],
  },
});
