<template>
  <div class="register">
    <Header></Header>
    <div class="content">
      <div class="title">注册用户</div>
      <input type="text" name="username" placeholder="用户名" v-model="username">
      <input type="text" name="email" placeholder="邮箱" v-model="email">
      <input type="password" name="pwd" placeholder="密码" v-model="password" @keyup.enter="toRegister">
      <div class="btn"><span @click="toRegister">立即注册</span></div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Cookies from 'js-cookie'
    export default {
        name: "Register",
        components:{
          Header
        },
        data(){
            return{
              username:"",
              email:"",
              password:"",
              headpic:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1257285701,821563668&fm=27&gp=0.jpg"
            }
        },
        methods:{
            toRegister(){
                let params = {
                    username:this.username,
                    email:this.email,
                    password:this.password,
                    headpic:this.headpic
                }
                this.$axios.post('note',params).then(res =>{
                    if(res.code == 200){
                        this.$message("注册成功！");

                      Cookies.set('username',this.username , { expires: 14 });
                      Cookies.set('email',this.email , { expires: 14 });
                      Cookies.set('headpic',this.headpic , { expires: 14 });
                      this.$store.commit("getLogin",this.username);
                      this.$store.commit("getHeadpic",this.headpic);

                        this.$router.push('/')
                    }else {
                      this.$message({
                        message: res.msg,
                        type: 'warning'
                      });
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
