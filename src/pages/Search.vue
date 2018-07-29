<template>
    <div class="search">
      <Header></Header>
      <div class="search-box">
        <input type="text" placeholder="请输入关键字"><span>搜索</span>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
        name: "Search",
      components:{
          Header
      }
    }
</script>

<style scoped>

</style>
