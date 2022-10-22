<script setup lang="ts" name="PrizePopup">
import { getUserPrizeList } from "@/api/prize";
import { prizeList } from "@/utils/dict";

import type { IRankList } from "@/types/prize";

const emits = defineEmits(["update:show"]);

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const visible = ref(false);
watch(
  () => props.show,
  (val) => {
    val && initData();

    visible.value = val;
  }
);

const userPrizeList = ref<IRankList>([]); // 数据列表
// 加载数据
const initData = () => {
  getUserPrizeList().then((res) => {
    userPrizeList.value = res;
  });
};

// 关闭弹窗
const close = () => {
  emits("update:show", false);
};
</script>

<template>
  <van-popup class="prize-popup" v-model:show="visible" teleport="body">
    <div class="content-box">
      <div class="content">
        <div class="title">中奖记录</div>
        <div class="list">
          <div class="item" v-for="(item, index) in userPrizeList" :key="index">
            <p>{{ item.lotteryTime }}</p>
            <p>{{ prizeList[item.prizeNo].title }}</p>
          </div>
        </div>
        <van-button type="primary" class="btnsave" block @click="close">
          确定
        </van-button>
      </div>
    </div>
  </van-popup>
</template>

<style lang="less" scoped>
:global(.prize-popup) {
  background: rgba(0, 0, 0, 0) !important;
}
.content-box {
  position: relative;
  width: 585px;
  text-align: center;

  .content-title {
    width: 390px;
    z-index: 10;
    margin-bottom: -70px;
  }

  .content {
    position: relative;
    width: 585px;
    padding: @margin 0 @margin-2;
    text-align: center;
    background: #fff;
    border: 15px solid #ffe69d;
    border-radius: 30px;
    .title {
      font-size: @font-size-md;
      margin-bottom: @margin;
    }
    .list {
      max-height: 50vh;
      padding-bottom: @margin;
      overflow-y: auto;
    }
    .item {
      margin-bottom: @margin;
    }

    .context {
      font-size: @font-size-md;
      color: @text-color;
      margin-bottom: @margin-2;
    }

    .btnsave {
      width: 500px;
      height: 60px;
      background: #ffd53d;
      border-color: #ffd53d;
      border-radius: 100px;
      font-size: @font-size-md;
      letter-spacing: 4px;
      margin: 0 auto;
    }
  }
}
</style>
