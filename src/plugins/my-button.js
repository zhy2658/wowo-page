// 写法一：对象中定义 install 函数
import { defineAsyncComponent } from 'vue'
const myButtonComponent = defineAsyncComponent(() =>
	import('@/plugins/components/my-button.vue')
)
let myButton = {
	install(app, options) {
		// { name: 'Jack' }
		// console.log(options);

		// 有了 app，我们注入一个全局组件
		app.component('my-button', myButtonComponent)
		// 也可以声明一个全局属性/函数
		app.config.globalProperties.$Tools = () => console.log('Hello,world')
	}
}
export default myButton;
