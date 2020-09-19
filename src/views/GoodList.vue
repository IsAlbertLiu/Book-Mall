<template>
  <div>
      <span>演示动态组建</span>
      <span>{{$route.params.item}}</span>
    <span>这是第{{$route.params.num}}本书</span>
  </div>
</template>

<script>
export default {
  name: "GoodList"
}
</script>

<style scoped>

</style>
