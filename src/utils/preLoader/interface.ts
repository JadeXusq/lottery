/**
 * 预加载资源数据
 */
 export type IResources = string[];

 

/**
 * 预加载状态 init: 初始化，未开始 loading: 预加载中 complete: 预加载完成
 */
export type IPreLoadStatus = 'init' | 'loading' | 'complete'

 /**
  * 预加载参数配置
  */
 export interface IPreLoaderOptions {
   /**
    * 预加载资源数据
    */
   resources: IResources;
   /**
    * 人工延迟进度条，展示效果
    */
   lazyTime?: number;
   /**
    * 加载开始回调函数，传入参数total
    */
   onStart?: (total: number) => void;
   /**
    * 正在加载回调函数，传入参数currentIndex, total
    */
   onProgress?: (index: number, total: number) => void;
   /**
    * 加载完毕回调函数，传入参数total
    */
   onComplete?: () => void;
 }