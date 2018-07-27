<template>
  <div id="app">
    <Header></Header>
    <div class="middle">
      <Swipe style="float: left"></Swipe>
      <Login style="float: right"></Login>
    </div>
  </div>

</template>

<script>
  import Header from './components/Header'
  import Swipe from './components/Swipe'
  import Login from './components/Login'
export default {
  name: 'App',
  components:{
    Header,
    Swipe,
    Login
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  background: rgb(245,245,245);
}
  .middle{
    width: 1100px;

    margin: 20px auto;
    height: 600px;
  }
</style>
