<script setup lang="ts" name="Lottery">
import useLottery from "@/hooks/useLottery";
import ResultPopup from "@/views/lottery/components/ResultPopup.vue";
import LeaderBoard from "@/views/lottery/components/LeaderBoard.vue";
import { prizeList } from "@/utils/dict";

const rank = ref(null); // 排行榜
const list = reactive(prizeList);
const showResult = ref(false);
const tip = ref("");
const resultType = ref("success");

const { currentIndex, prizeIndex, lotteryHandler } = useLottery({
  callback: () => {
    showResult.value = true; // 显示弹窗

    const result = list[prizeIndex.value];
    resultType.value = result.fail ? "fail" : "success"; // 弹窗类型
    tip.value = result.title; // 提示文案

    rank.value && rank.value.loadData(); // 抽奖完重新请求一下排行榜数据
  },
});
</script>

<template>
  <main>
    <div class="myprize">
      <span class="myprize-inner">
        豪礼大放送
        <img class="gomyimg" src="@/assets/images/lottery/gomy.png" />
      </span>
    </div>
    <div class="lottery">
      <div class="lottery-item">
        <div class="lottery-start">
          <div class="box" @click="lotteryHandler"></div>
        </div>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="box">
              <img v-if="index === currentIndex" :src="item.activeImg" />
              <img v-else :src="item.img" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 排行榜 -->
    <LeaderBoard ref="rank" />

    <!-- 结果弹窗 -->
    <ResultPopup v-model:show="showResult" :tip="tip" :type="resultType" />
  </main>
</template>

<style scoped lang="less">
@import "./index.less";
</style>
