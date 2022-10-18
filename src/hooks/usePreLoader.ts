import PreLoader from "@/utils/preLoader";
import type {
  IPreLoadStatus,
  IPreLoaderOptions,
} from "@/utils/preLoader/interface";

export default function usePreLoader(options: IPreLoaderOptions) {
  const total = ref(0);
  const currentIndex = ref(0);
  const progress = ref("0%");
  const status = ref<IPreLoadStatus>("init");

  if (!options.resources || !options.resources.length) {
    console.warn("预加载资源不能为空");
  }

  new PreLoader({
    resources: options.resources,
    lazyTime: options.lazyTime,
    onStart: (totalNum) => {
      total.value = totalNum;
      status.value = "loading";

      // 调用外部配置方法
      options.onStart && options.onStart(totalNum);
    },
    onProgress: (index, total) => {
      currentIndex.value = index;
      progress.value = `${((index / total) * 100).toFixed(2)}%`;

      // 调用外部配置方法
      options.onProgress && options.onProgress(index, total);
    },
    onComplete: () => {
      status.value = "complete";

      // 调用外部配置方法
      options.onComplete && options.onComplete();
    },
  } as IPreLoaderOptions);

  return {
    total,
    currentIndex,
    progress,
    status,
  };
}
