/**
 * 判断是否是function
 * @param value 
 * @returns 
 */
export function isFunction(fc: unknown) {
  return Object.prototype.toString.call(fc) === '[object Function]'
}