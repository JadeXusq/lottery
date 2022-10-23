import type { IUserInfo } from "./user";
/**
 * 获取中奖号返参
 */
export interface IPrizeResponse {
  /**
   * 中奖号
   */
  prizeNo: number;
}

export interface IRank extends IUserInfo, IPrizeResponse {
  /**
   * 中奖时间
   */
  lotteryTime?: number;
}

/**
 * 中奖名单
 */
export type IRankList = Array<IRank>;
