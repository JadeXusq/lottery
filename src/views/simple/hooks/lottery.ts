export default function useSimpleLottery() {
  const angle = ref<number>(0)

  // 抽奖
  const lotteryHandler = () => {
    const originNum = (angle.value % 360) / 60 // 记录是第几个
    const randomNum = Math.floor(Math.random() * 5) // 生成随机数（从0开始，生成判断奖品）
    console.log(`转到第${randomNum + 1}个`)
    const isGift = !(randomNum % 2)
    const needAngle = (randomNum - originNum) * 60

    angle.value = angle.value + needAngle + 360 * 8 // 原来的角度+需要旋转到位置的角度+多转5圈（防止回旋、多转体现效果）

    setTimeout(() => {
      Toast(isGift ? '恭喜中奖啦！' : '很遗憾，没中奖')
    }, 5000)
  }

  return {
    angle,
    lotteryHandler
  }
}