
import Toast from './Toast'
function install(Vue){
    // document.body.appendChild(Toast.$el) // $el => undefined

    // 1 创建组件构造器
    let ToastConstructor = Vue.extend(Toast)
    // 2 new 构造器 创建一个组件对象
    let newToast = new ToastConstructor()
    // 3 将组件对象手动挂载到某个元素上
    newToast.$mount(document.createElement('div'))
    // 4 newToast.$el 对应的 div
    document.body.appendChild(newToast.$el) 

    Vue.prototype.$toast = newToast
};

export default {install}