<template>
    <div class="login">
      <input type="text" name="email" placeholder="邮箱" >
      <input type="password" name="pwd" placeholder="密码">
      <span class="btn1">登录</span>
      <span class="btn2" @click="gotoRegister">去注册</span>
      <div style="font-size: 20px;color: #999;margin: 10px auto;width: 320px;">
        this notes is very pretent bility
      </div>
      <div style="font-size: 20px;color: #999;margin: 10px auto;width: 320px;text-align: center">
        牛人都在用的笔记本!!!
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods:{
          gotoRegister(){
            this.$router.push('/Register')
          }
        }
    }
</script>

<style scoped lang="less">
.login{
  width: 320px;
  padding: 20px;
  margin-right: 10px;
  background: #fff;
  input{
    width: 300px;
    height: 36px;
    border-radius: 5px;
    margin-bottom: 20px;
    padding-left: 20px;
  }
  .btn1{
    display: block;
    text-align: center;
    width: 320px;
    height: 40px;
    line-height: 40px;
    color: white;
    background:rgb(57,141,238);
    border: 1px solid rgb(57,141,238);
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .btn2{
    display: block;
    text-align: center;
    width: 320px;
    height: 40px;
    line-height: 40px;
    color: rgb(57,141,238);
    background: white;
    border: 1px solid rgb(57,141,238);
    border-radius: 5px;
  }
}
</style>
