<template>
  <el-carousel class="swipe">
    <el-carousel-item v-for="item in 4" :key="item" class="swipe-item">
      <img src="../assets/img/pic1.jpg">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        name: "Swipe"
    }
</script>


<style scoped lang="less">
  .swipe{
    width: 640px;
    height: 346px;
    .swipe-item{
      width: 640px;
      height: 346px;
      img{
        width: 640px;
        height: 346px;
      }
    }
  }
</style>
