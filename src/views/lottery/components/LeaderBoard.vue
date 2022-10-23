<script setup lang="ts">
import { getRankList } from "@/api/prize";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import titleImg from "@/assets/images/lottery/titleimg.png";
import { prizeList } from "@/utils/dict";
import type { IRankList } from "@/types/prize";

const list = ref<IRankList>([]);
let timer = 0;

/**
 * 加载数据，暴露给外部使用
 */
const loadData = () => {
  getRankList().then((res) => {
    list.value = res;

    // 加载完数据再预设下次刷新时间
    clearTimer();
    timer = window.setTimeout(loadData, 30 * 1000);
  });
};

// 清空定时器
const clearTimer = () => {
  clearInterval(timer);
  timer = 0;
};

onMounted(() => {
  loadData();
}); // 初始化加载数据

// 清除定时器
onBeforeUnmount(() => {
  clearTimer();
});

defineExpose({ loadData });
</script>

<template>
  <div class="rank-box">
    <div class="rank-box-inner">
      <img class="rank-box-title" :src="titleImg" />
      <div class="rank-box-content">
        <vue3-seamless-scroll :list="list" class="scroll" :step="0.5">
          <div class="item" v-for="(item, index) in list" :key="index">
            <span>{{
              `恭喜 ${item.userName} 抽中了${prizeList[item.prizeNo].title}`
            }}</span>
          </div>
        </vue3-seamless-scroll>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.rank-box {
  background-color: #fff;
  border-radius: @border-radius-double;
  height: 450px;
  margin: @margin-2 @margin-2 0;
  overflow: hidden;
  padding-bottom: @margin-2;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;

  &-inner {
    padding: @margin-2 @margin-2 * 2;
    border-radius: @border-radius-double;
    background-color: #fefcfa;
  }

  &-title {
    width: 270px;
    margin-bottom: @margin;
  }

  &-content {
    height: 280px;
    overflow: hidden;
    color: #666;
    font-size: @font-size-md;
    line-height: 40px;
    text-align: left;
    .item {
      margin-bottom: @margin;
    }
  }
}
</style>
