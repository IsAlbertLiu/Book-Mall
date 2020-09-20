<template>
  <div>
      <p>演示动态组建</p>
<!--      <span>{{$route.params.item}}</span>-->
<!--      <span>这是第{{$route.params.num}}本书</span>-->
    <router-link to="/goods/title">
      显示商品标题
    </router-link>
    <router-link to="/goods/img">
      显示商品图片
    </router-link>

    <br>
    <router-link to="/cart">跳转到购物车页面</router-link>
    <button @click="jump" >button - 跳转到购物车页面</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "GoodList",
  methods:{
    jump(){
      //通过字符串的方式跳转页面
      // this.$router.push('/cart');
      //通过对象的方式跳转页面
      // this.$router.push({path:'/cart'});
      //给路由传参
      this.$router.push({path:'/cart?goodsId=123'});
      // 历史浏览跳转
      // this.$router.go(-2);
    }
  }
}
</script>

<style scoped>

</style>
