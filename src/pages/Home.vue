<template>
  <div id="home">
    <Header></Header>
    <div class="middle">
      <Swipe style="float: left"></Swipe>
      <Login style="float: right"></Login>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Swipe from '../components/Swipe'
  import Login from '../components/Login'
    export default {
        name: "Home",
      components:{
        Header,
        Swipe,
        Login
      }
    }
</script>

<style scoped>
  #home{
    background: rgb(245,245,245);
  }
  .middle{
    width: 1100px;

    margin: 20px auto;
    height: 600px;
  }
</style>
