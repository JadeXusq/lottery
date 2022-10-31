<script setup lang="ts" name="Loading">
interface IProps {
  loadingArr: string[];
  progress: number | string;
}

const props = withDefaults(defineProps<IProps>(), {
  loadingArr: () => ["L", "O", "A", "D", "I", "N", "G", ".", ".", "."],
  progress: 0,
});
</script>

<template>
  <main>
    <h1>
      <span
        v-for="(item, index) in props.loadingArr"
        :key="index"
        :style="{ 'animation-delay': `${0.3 * index}s` }"
      >
        {{ item }}
      </span>
    </h1>
    <div class="progress-bar">
      <div class="progress-bar-inner" :style="{ width: progress }"></div>
      <div class="progress-bar-text">{{ progress }}</div>
    </div>
  </main>
</template>

<style lang="less" scoped>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-top: -300px;
  font-size: @font-size-sm;
  font-weight: 900;
  padding-bottom: @margin;
  letter-spacing: 20px;
  span {
    animation: load-text 1s infinite cubic-bezier(0.1, 0.15, 0.9, 1);
    display: inline-block;
  }
}

.progress-bar {
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  width: 420px;
  border-radius: 10px;
  &-inner {
    position: relative;
    width: 0;
    height: 32px;
    background-color: #ffdd62;
    border-radius: 10px;
    color: #fff;
    box-shadow: 1px 0px 2px rgb(0 0 0 / 25%), 0px 1px 2px rgb(0 0 0 / 25%);
    transition: width ease 0.01s;
  }
  &-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: @font-size-sm;
    color: @white;
    letter-spacing: 1px;
  }
}
</style>
