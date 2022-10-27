<script setup lang="ts">
import { useUserStore } from "@/store";
import Loading from "@/components/Loading.vue";
import usePreLoader from "@/hooks/usePreLoader";

import type { IFileRequireObject } from "@/types/file";

const userStore = useUserStore();
const router = useRouter();

// 引入图片资源
const files = import.meta.glob(["@/assets/images/lottery/**/**"], {
  eager: true,
});
const resources = Object.keys(files).map(
  (key) => (files[key] as IFileRequireObject).default
);

const { progress, status } = usePreLoader({
  resources,
  onComplete: () => {
    if (!userStore.token) {
      router.push("/login");
      return;
    }

    userStore.getUserInfo();
  },
  lazyTime: 100, // 人工延迟一下
});
</script>

<template>
  <Loading v-if="status !== 'complete'" :progress="progress" />

  <RouterView v-else />
</template>
