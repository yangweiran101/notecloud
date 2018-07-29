<template>
  <div id="home">
    <Header></Header>
    <div class="middle">
      <Swipe style="float: left"></Swipe>
      <Login style="float: right"></Login>
    </div>
    <div class="content">
      <List></List>
    </div>

  </div>
</template>

<script>
  import Header from '../components/Header'
  import Swipe from '../components/Swipe'
  import Login from '../components/Login'
  import List from '../components/List'
    export default {
        name: "Home",
      components:{
        Header,
        Swipe,
        Login,
        List
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
    height: 400px;
  }
  .content{
    width: 1100px;
    margin: 20px auto;
  }
</style>
