<template>
    <div class="login">
      <div class="region-box" v-if="!loginMsg.username">
        <input type="text" name="email" placeholder="邮箱" v-model="email">
        <input type="password" name="pwd" placeholder="密码" v-model="password" @keyup.enter="gotoLogin">
        <span class="btn1" @click="gotoLogin">登录</span>
        <span class="btn2" @click="gotoRegister">去注册</span>
        <div style="font-size: 20px;color: #999;margin: 16px auto;width: 320px;">
          this notes is very pretent bility
        </div>
        <div style="font-size: 20px;color: #999;margin: 16px auto;width: 320px;text-align: center">
          牛人都在用的笔记本!!!
        </div>
      </div>
      <div class="login-box" v-else>
        <div class="headpic">
          <img :src="loginMsg.headpic" >
        </div>
        <div class="email">{{loginMsg.email}}</div>
        <div class="username">用户{{loginMsg.username}}</div>
        <span class="btn2" @click="gotoModify(loginMsg.email)">修改信息</span>
        <span class="btn2" @click="gotoDelete">退出登录</span>
      </div>
    </div>
</template>

<script>

  import Cookies from 'js-cookie'
    export default {
        name: "Login",
      data(){
          return{
            email:"",
            password:"",
            loginMsg:{
              username:'',
              email:'',
              headpic:''
            }
          }
      },
        methods:{
          gotoRegister(){
            this.$router.push('/Register')
          },
          gotoLogin(){
            let params ={
              email:this.email,
              password:this.password
            };
            this.$axios.post('login',params).then(res =>{
              if(res.code ==200){
                this.$message('登陆成功，欢迎回来' +res.data.username);
                this.loginMsg.username = res.data.username;
                this.loginMsg.email = res.data.email;
                this.loginMsg.headpic = res.data.headpic;

                this.$store.commit("getLogin",this.loginMsg.username);
                this.$store.commit("getHeadpic",this.loginMsg.headpic);

                Cookies.set('username',this.loginMsg.username , { expires: 14 });
                Cookies.set('email',this.loginMsg.email , { expires: 14 });
                Cookies.set('headpic',this.loginMsg.headpic , { expires: 14 });
                this.$router.push('/')
              }else{
                this.$message({
                  message: res.msg,
                  type: 'warning'
                });
                this.email ='';
                this.password ='';
              }
            })
          },
          getUserMsg(){
            let username = Cookies.get('username');
            let email = Cookies.get('email');
            let headpic = Cookies.get('headpic');

            if(username&&email){
              this.loginMsg.username = username;
              this.loginMsg.email = email;
              this.loginMsg.headpic = headpic;
            }else{
              this.loginMsg.username = '';
              this.loginMsg.email = '';
              this.loginMsg.headpic = '';
            }
          },
          gotoModify(email){
            this.$router.push({path:'/Modification',query:{email}})
          },
          gotoDelete(){
            Cookies.remove('username');
            Cookies.remove('email');
            Cookies.remove('headpic');

            this.getUserMsg();
            this.$store.commit("getLogin",'')
          }
        },
      mounted(){
        this.getUserMsg();
        this.$store.commit("getLogin",this.loginMsg.username);
        this.$store.commit("getHeadpic",this.loginMsg.headpic);

      }
    }
</script>

<style scoped lang="less">
.login{
  width: 320px;
  height: 360px;
  padding: 20px;
  margin-right: 10px;
  background: #fff;
  .region-box{
    input{
      width: 300px;
      height: 45px;
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
      cursor: pointer;
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
      cursor: pointer;
    }
  }
  .login-box{
    .headpic{
      display: block;
      border-radius: 50%;
      margin: 0 auto;
      width: 160px;
      height: 160px;
      overflow: hidden;
      img{
        width: 160px;
      }
    }

    .email{
      font-size: 18px;
      margin: 10px auto;
      text-align: center;
      width: 320px;
      height: 40px;
      line-height: 40px;
      color: rgb(57,141,238);
      font-weight: bolder;
      background: white;
      border-radius: 5px;
    }
    .username{
      font-size: 28px;
      margin: 10px auto;
      text-align: center;
      width: 320px;
      height: 40px;
      line-height: 40px;
      color: rgb(57,141,238);
      background: white;
      border-radius: 5px;
    }
    .btn2{
      display: block;
      margin-bottom: 10px;
      text-align: center;
      width: 320px;
      height: 40px;
      line-height: 40px;
      color: rgb(57,141,238);
      background: white;
      border: 1px solid rgb(57,141,238);
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
