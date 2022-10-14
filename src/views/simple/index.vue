<script setup lang="ts" name="demo">
  import useLottery from './hooks/lottery'
  const { angle, lotteryHandler } = useLottery()
</script>

<template>
  <div class="turntable">
    <div class="bg">
      <img class="draw-bg" :style="{transform: `rotate(${angle}deg)`}" src="@/assets/images/demo/draw-bg.png">
      <img class="start-btn" src="@/assets/images/demo/start.png" @click="lotteryHandler">
    </div>
  </div>
</template>

<style scoped lang="less">
  @import './index.less';
</style>