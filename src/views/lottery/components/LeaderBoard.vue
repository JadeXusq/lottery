<script setup lang="ts">
  import { getRankList } from '@/api/user'
  import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
  import titleImg from '@/assets/images/lottery/titleimg.png'
  import { prizeList } from '@/utils/dict'

  const list = ref([])

  /**
   * 加载数据，暴露给外部使用
   */
  const loadData = () => {
    getRankList().then(res => {
      list.value = res
    })
  }

  onMounted(loadData) // 初始化加载数据

  defineExpose({ loadData })
</script>

<template>
  <div class="rank-box">
    <div class="rank-box-inner">
      <img  class="rank-box-title" :src="titleImg">
      <div class="rank-box-content">
        <vue3-seamless-scroll :list="list" class="scroll">
          <div class="item" v-for="(item, index) in list" :key="index">
            <span>{{`恭喜 ${item.userName} 抽中了${prizeList[item.prize].title}`}}</span>
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
