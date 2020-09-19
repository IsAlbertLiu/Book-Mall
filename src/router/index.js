import Vue from 'vue'
import Router from 'vue-router'
import GoodList from "../views/GoodList";

Vue.use(Router)

export default new Router({
  // mode: "history",// 可以不显示路由地址中的 #

  routes: [
    {
      path: '/good/:item/book/:num',
      name: 'GoodList',
      component: GoodList
    }
  ]
})
