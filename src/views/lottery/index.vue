<script setup lang="ts" name="Lottery">
  import img01 from '@/assets/images/lottery/wyy1.png'
  import img02 from '@/assets/images/lottery/5yfee1.png'
  import img03 from '@/assets/images/lottery/txsp1.png'
  import img04 from '@/assets/images/lottery/qq1.png'
  import img05 from '@/assets/images/lottery/15fee1.png'
  import img06 from '@/assets/images/lottery/aqy1.png'
  import img07 from '@/assets/images/lottery/try1.png'
  import img08 from '@/assets/images/lottery/10fee1.png'
  const startLottery = () => {
    
  }
  const list = ref([
    {
      img: img01,
      title: '网易云音乐会员月卡'
    },
    {
      img: img02,
      title: '5元话费券'
    },
    {
      img: img03,
      title: '腾讯视频会员月卡'
    },
    {
      img: img04,
      title: 'QQ音乐会员月卡'
    },
    {
      img: img05,
      title: '15元话费券'
    },
    {
      img: img06,
      title: '爱奇艺视频会员月卡'
    },
    {
      img: img07,
      title: '继续努力'
    },
    {
      img: img08,
      title: '10元话费券'
    }
  ])
</script>

<template>
  <main>
    <div class="myprize">
      <span class="myprize-inner">
        豪礼大放送
        <img class="gomyimg" src="@/assets/images/lottery/gomy.png">
      </span>
    </div>
    <div class="lottery">
      <div class="lottery-item">
        <div class="lottery-start">
          <div class="box" @click="startLottery">
          </div>
        </div>
        <ul>
          <li v-for="(item,i) in list" :key="i" >
            <div class="box">
              <!-- <p v-if="i==index"><img :src="activelist[index].img" alt=""></p>
              <p v-if="i!=index"><img :src="item.img" alt=""></p> -->
              <p><img :src="item.img" /></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped lang="less">
@import './index.less';
</style>