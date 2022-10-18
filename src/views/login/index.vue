<script setup lang="ts">
import { useUserStore } from "@/store";
import useForm from "@/hooks/useForm";
import type { ILoginRequest } from "@/types/user";

const router = useRouter();
const userStore = useUserStore();

const data = reactive<ILoginRequest>({});
const form = ref();

const login = () => {
  userStore.login(toRaw(data)).then(() => {
    router.push("/");
  });
};

const { submit } = useForm({
  form,
  submitCallback: login,
});
</script>

<template>
  <main>
    <img class="banner" src="@/assets/images/lottery/login-banner.jpg" />
    <div class="activity">
      <van-form
        ref="form"
        class="activity-main"
        :show-error="false"
        :show-error-message="false"
      >
        <van-field
          v-model="data.userName"
          name="用户名"
          placeholder="请填写用户名"
          :maxlength="20"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="data.phone"
          name="手机号"
          placeholder="请填写手机号"
          :maxlength="11"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="data.password"
          name="密码"
          placeholder="请填写密码"
          :maxlength="20"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-button type="primary" block @click="submit">确定</van-button>
      </van-form>
      <div class="activity-main">
        <img src="@/assets/images/lottery/rule.png" class="rule-title" />
        <div class="rule-content">
          <p>1.活动时间：2022年10月22日——2022年12月31日。</p>
          <p>2.本次活动为福建某某公司专属特权活动，仅针对目标用户参与。</p>
          <p>3.活动期间，福建某某公司专属客户每天可参与抽奖三次。</p>
          <p>4.本次活动纯属虚构，如有雷同纯属巧合。</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>
