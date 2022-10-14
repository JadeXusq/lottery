<script setup lang="ts" name="home">
  // import { getCurrentInstance } from 'vue'
  // const { proxy } = getCurrentInstance()
  // proxy.$toast('123')
  console.log(123)
</script>

<template>
  <main>
    <van-button type="primary" class="btn">1234123</van-button>
    <div class="test">123</div>
  </main>
</template>
<style scoped>
.btn {
  width: 200px;
  height: 200px;
  font-size: 20px;
}
</style>

<style scoped lang="less">
.test {
  background: @bg-color-light;
  padding: @margin;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: @text-color-secondary;
  font-size: @font-size-lg;
}
</style>