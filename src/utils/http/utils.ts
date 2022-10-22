import router from "@/router";
import { useUserStore } from "@/store";

export const showMessage = (status: number | string): string => {
  const userStore = useUserStore();
  let message = "";
  switch (status) {
    case 401:
      message = "身份验证错误(401)";
      userStore.loginOut().then(() => {
        router.push("/login");
      });
      break;
    case 405:
      message = "请求方法有误(405)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    default:
      message = `连接出错(${status})!`;
  }
  message = `${message}，请检查网络或联系管理员！`;

  Toast(message);
  return message;
};
