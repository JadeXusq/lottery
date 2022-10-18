/// <reference types="vite/client" />

declare module "*.vue" {
  //declare声明宣告， 声明一个ambient module(即:没有内部实现的 module声明)
  import Vue from "vue";
  export default Vue;
}
