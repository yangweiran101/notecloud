<template>
  <div class="register">
    <Header></Header>
    <div class="content">
      <div class="title">注册用户</div>
      <input type="text" name="username" placeholder="用户名">
      <input type="text" name="email" placeholder="邮箱" >
      <input type="password" name="pwd" placeholder="密码">
      <div class="btn"><span>立即注册</span></div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
        name: "Register",
      components:{
          Header
      }
    }
</script>

<style scoped lang="less">
.register{
  background: #f5f5f5;
  .content {
    width: 1100px;
    margin: 0 auto;
    background: #fff;
    padding: 20px 150px;
    .title{
      font-size: 30px;
      text-align: center;
    }
    input{
      display: block;
      width: 420px;
      height: 45px;
      margin: 20px auto;
      border-radius: 5px;
    }
    .btn{
      font-size: 28px;
      text-align: center;
      margin-top: 30px;
      span{
        background: rgb(57,141,238);
        color: white;
        font-weight: 400;
        border: 1px solid rgb(57,141,238);
        border-radius: 5px;
        padding: 5px 35px;
      }
    }
  }
}
</style>
