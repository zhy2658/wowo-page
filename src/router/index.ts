import {
  createRouter,
  createWebHashHistory,
  createMemoryHistory,
  createWebHistory
} from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

const routes = [
  {
    path: '/', //路径描述
    name: 'home',
    component: HomeView // 主动引用，无论是否访问均加载页面
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/account/AccountView.vue'), // 异步加载的路由的组件位置,只有页面被访问才加载
    children: [
      {
        path: 'list',
        component: () => import('@/views/account/ListView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(), // 跳转方式
  routes: routes // 路由配置
})
export default router
