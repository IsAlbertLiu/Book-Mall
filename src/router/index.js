import Vue from 'vue'
import Router from 'vue-router'
import GoodList from "../views/GoodList";
import Title from "../views/Title";
import Image from "../views/Image";
import Cart from "../views/Cart";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'GoodList',
      component: GoodList,
      children:[
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'img',
          name: 'img',
          component: Image
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
