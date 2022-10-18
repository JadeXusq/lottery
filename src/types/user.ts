/**
 * 用户信息
 */
export interface IUserInfo {
  /**
   * 用户名
   */
  userName?: string;
  /**
   * 用户电话
   */
  phone?: string;
}

export interface IUserState {
  /**
   * 用户令牌
   */
  token: string;
  /**
   * 用户信息
   */
  userInfo: IUserInfo;
}

/**
 * 用户登录传参
 */
export interface ILoginRequest extends IUserInfo {
  /**
   * 密码
   */
  password?: string;
}
