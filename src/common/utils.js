/**
 * 工具类 目录
 *  
 * debounce 防抖处理
*/

/**
 * 防抖处理
 * @param {*} func 
 * @param {*} delay 
 */
export function debounce(func, delay=100){
  let timer = null
  return function( ...args){
    timer && clearTimeout(timer)
    timer = setTimeout(()=>{
      func.call(this, ...args)
    }, delay)
  }
}