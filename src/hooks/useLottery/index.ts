import { getPrizeNo } from "@/api/prize";
import type { ILotteryOptions, ILotteryOptionsPartial } from "./interface";

export default function useLottery(options: ILotteryOptionsPartial) {
  // 默认配置
  const defaultOptions: ILotteryOptions = {
    total: 8,
    baseCircle: 8,
    minSpeed: 40,
    maxSpeed: 200,
  };

  // 合并配置
  const mergeOptions: ILotteryOptions = {
    ...defaultOptions,
    ...options,
  };

  const currentIndex = ref(-1); // 当前停留索引
  const prizeIndex = ref(-1); // 中奖索引
  const isDoing = ref(false); // 是否抽奖中

  const baseSteps = mergeOptions.total * mergeOptions.baseCircle; // 基础步数
  let steps = 0; // 步数
  let timer = 0; // 定时器
  let speed = mergeOptions.maxSpeed; // 速度，时间间隔

  /**
   * 走一步，如果转了一圈，需要回到原点
   */
  const runStep = () => {
    steps++;
    currentIndex.value++;
    if (currentIndex.value >= mergeOptions.total) {
      currentIndex.value = 0;
    }
  };

  /**
   * 重置数据
   */
  const reset = () => {
    steps = 0;
    speed = mergeOptions.maxSpeed;
    isDoing.value = false; // 更新状态为未抽奖状态

    clearTimeout(timer); // 清除定时器
  };

  /**
   * 执行抽奖判断逻辑
   */
  const run = async () => {
    runStep();

    // 抽奖结束（基础圈数+多转2圈减速+转到目标位置），如果请求接口没返回，会继续转圈，返回数据之后，转到对应位置
    if (
      steps > baseSteps + mergeOptions.total * 2 &&
      currentIndex.value === prizeIndex.value
    ) {
      reset(); // 重置数据状态,以备下次抽奖使用
      mergeOptions.callback && mergeOptions.callback();
      return;
    }

    if (steps <= baseSteps) {
      speed -= 10;
      // 最快速度之后不再更快
      if (speed <= mergeOptions.minSpeed) {
        speed = mergeOptions.minSpeed;
      }

      // 达到基础圈数之后，创建一个奖品随机数（TODO: 后期考虑改为接口获取）
      if (steps === baseSteps) {
        const result = await getPrizeNo();
        prizeIndex.value = result.prizeNo;
      }
    } else {
      speed += 10;
      // 最慢速度之后不再更慢
      if (speed >= mergeOptions.maxSpeed) {
        speed = mergeOptions.maxSpeed;
      }
    }

    timer = setTimeout(run, speed); // 重新执行
  };

  /**
   * 开始抽奖方法
   */
  const lotteryHandler = () => {
    // 抽奖中，不能再点击
    if (isDoing.value) {
      return;
    }

    prizeIndex.value = -1;
    isDoing.value = true;

    run(); // 开始执行
  };
  return {
    currentIndex,
    prizeIndex,
    isDoing,
    lotteryHandler,
  };
}
