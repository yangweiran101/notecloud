<template>
  <div class="modify">
    <Header></Header>
    <div class="content">
      <div class="title">修改信息</div>
      <input type="password" name="pwd" placeholder="请输入原密码" v-model="password">
      <input type="password" name="newpwdone" placeholder="请输入新密码" v-model="newpwdone">
      <input type="password" name="newpwdtwo" placeholder="请再次输入新密码" v-model="newpwdtwo" @keyup.enter="">
      <div class="btn"><span @click="toModify">立即修改</span></div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Cookies from 'js-cookie'
  import axios from 'axios'
    export default {
        name: "Modification",
      components:{
          Header
      },
      data(){
          return{
            password:'',
            newpwdone:'',
            newpwdtwo:'',
          }
      },
      methods: {
        toModify() {
          if(this.newpwdone==this.newpwdtwo){
            let params = {
              email:this.$route.query.email,
              password:this.password,
              newpassword:this.newpwdone
            };
            axios.post('/api/Update',params).then(res =>{

              if(res.data.code =='200'){
                this.$message(res.data.msg);
                this.$router.push('/');
              }else{
                this.$message(res.data.msg);
              }

            })
          }else {
            this.$message('两次输入的新密码不一致');
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .modify{
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
