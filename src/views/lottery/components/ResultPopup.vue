<script setup lang="ts" name="ResultPopup">
  import FailImg from '@/assets/images/lottery/yh.png'
  import SuccessImg from '@/assets/images/lottery/gx.png'

  const emits = defineEmits(['update:show'])

  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'fail'
    },
    tip: {
      type: String,
      default: ''
    }
  })

  const visible = ref(false)
  watch(() => props.show, (val) => {
    visible.value = val
  })

  // 类型标题框
  const titleImg = computed(() => {
    return props.type === 'fail' ? FailImg : SuccessImg
  })

  // 关闭弹窗
  const close = () => {
    emits('update:show', false)
  }
</script>

<template>
  <van-popup
    class="result-popup"
    v-model:show="visible"
     teleport="body"
  >
    <div class="content-box">
      <img class="content-title" :src="titleImg">
      <div class="content">
        <div class="context">{{tip}}</div>
        <van-button type="primary" class="btnsave" block @click="close">确定</van-button>
      </div>
    </div>
  </van-popup>
</template>

<style lang="less" scoped>
:global(.result-popup) {
  background: rgba(0,0,0,0);
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
    padding: 70px 0 @margin-2;
    text-align: center;
    background: #fff;
    border: 15px solid #ffe69d;
    border-radius: 30px;
    
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
