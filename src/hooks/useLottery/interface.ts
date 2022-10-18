/**
 * 抽奖配置参数
 */
export interface ILotteryOptions {
  /**
   * 宫格总数，不包括中间按钮
   */
  total: number;
  /**
   * 基础圈数
   */
  baseCircle: number;
  /**
   * 最快速度
   */
  minSpeed: number;
  /**
   * 最慢速度
   */
  maxSpeed: number;
  /**
   * 抽奖结束回调
   */
  callback?: () => void;
}

/**
 * 全部转为可选参数
 */
export type ILotteryOptionsPartial = Partial<ILotteryOptions>;
