/*
 * @Author: ztr
 * @Date: 2020-02-27 17:00:36
 * @LastEditTime: 2020-03-18 10:14:20
 * @LastEditors: hsingyin
 * @Description: rem适配文件
 * @FilePath: /vue-vant-h5-template/src/plugins/rem.js
 */

const remUtils = (function(doc, win) {
  const resizeEvt =
      'orientationchange' in window ? 'orientationchange' : 'resize',
    setRem = function() {
      const docEl = doc.documentElement
      const dpr = win.devicePixelRatio //移动端屏幕dpr
      const visualView = Math.min(
        docEl.getBoundingClientRect().width,
        750 * dpr
      )
      const newBase = (visualView * 100) / 750
      docEl.style.fontSize = newBase + 'px' //默认设计稿宽度750px
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, setRem, false)
  doc.addEventListener('DOMContentLoaded', setRem, false)
})(document, window)

export default remUtils