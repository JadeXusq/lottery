import type { IPreLoaderOptions } from "./interface";

class PreLoader {
  private total: number = 0;
  private currentIndex: number = 0;
  /**
   * 默认配置参数
   */
  private options: IPreLoaderOptions = {
    resources: [],
    onStart: () => {},
    onProgress: () => {},
    onComplete: () => {},
  };

  /**
   * 初始化数据
   * @param options
   */
  constructor(options: IPreLoaderOptions) {
    this.options = options;
    this.total = options.resources.length;

    this.startLoad();
  }

  /**
   * 启动加载
   */
  startLoad() {
    this.options.onStart && this.options.onStart(this.total);

    const { resources } = this.options;
    for (let i = 0; i < resources.length; i++) {
      const image = new Image();
      image.onload = () => {
        this.loadedHandler(i);
      };
      image.onerror = () => {
        this.loadedHandler(i);
      };
      image.src = resources[i];
    }
  }

  /**
   * 加载完毕处理，做延迟效果
   */
  loadedHandler(num: number) {
    if (this.options.lazyTime) {
      setTimeout(() => {
        this.loaded();
      }, num * this.options.lazyTime);
    } else {
      this.loaded();
    }
  }

  /**
   * 加载图片回调，无论成功与否，都返回进度
   */
  loaded() {
    this.options.onProgress &&
      this.options.onProgress(++this.currentIndex, this.total);

    if (this.currentIndex === this.total) {
      this.options.onComplete && this.options.onComplete();
    }
  }
}

export default PreLoader;
