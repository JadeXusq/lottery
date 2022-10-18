<script setup lang="ts" name="Simple">
import useSimpleLottery from "./hooks/lottery";
const { angle, lotteryHandler } = useSimpleLottery();
</script>

<template>
  <main>
    <div class="turntable">
      <div class="bg">
        <img
          class="draw-bg"
          :style="{ transform: `rotate(${angle}deg)` }"
          src="@/assets/images/simple/draw-bg.png"
        />
        <img
          class="start-btn"
          src="@/assets/images/simple/start.png"
          @click="lotteryHandler"
        />
      </div>
    </div>
  </main>
</template>

<style scoped lang="less">
@import "./index.less";
</style>
