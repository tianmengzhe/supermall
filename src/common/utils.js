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


export function formatDate(date, fmt){
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$, (date.getYear()+'').substr(4 - RegExp.$.length));
  }

  let o = {
    'M+': date.getMonth() +1,
    'd+': date.getDate(),
    'n+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for(let k in o){
    if(new RegExp(`(${k})`).test(fmt)){
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt

  function padLeftZero(str){
    return ('00'+str).substr(str.length)
  }
}
