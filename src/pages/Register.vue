<template>
  <div class="register">
    <Header></Header>
    <div class="content">
      <div class="title">注册用户</div>
      <input type="text" name="username" placeholder="用户名" v-model="username">
      <input type="text" name="email" placeholder="邮箱" v-model="email">
      <input type="password" name="pwd" placeholder="密码" v-model="password">
      <div class="btn"><span @click="toRegister">立即注册</span></div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import axios from 'axios'
    export default {
        name: "Register",
        components:{
          Header
        },
        data(){
            return{
                username:"",
                email:"",
                password:""
            }
        },
        methods:{
            toRegister(){
                let params = {
                    username:this.username,
                    email:this.email,
                    password:this.password
                }
                axios.post('/api/note',params).then(res =>{
                    if(res.data.code == 200){
                        alert("注册成功！");
                        this.$router.push('/')
                    }else {
                        alert(res.data.msg);
                        this.username = "";
                        this.email = "";
                        this.password = ""
                    }
                })
            }
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
      cursor: pointer;
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
