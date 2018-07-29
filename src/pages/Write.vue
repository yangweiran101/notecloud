<template>
    <div class="write">
      <Header></Header>
      <div class="content">
        <div class="content-title" >标题</div>
        <input type="text" v-model="title" class="title">
        <input type="number" v-model="id" class="id">
        <div class="content-title">内容</div>
        <div id="editorElem" style="text-align:left"></div>
        <div class="send" @click="getContent">发布</div>
      </div>
    </div>
</template>


<script>
  import E from 'wangeditor'
  import axios from  'axios'
  import Header from '../components/Header'
    export default {
        name: "Write",
      components:{
          Header
      },
      data () {
        return {
          editorContent: '',
          pic:'',
          title:'',
          id:''
        }
      },
      methods: {
        getContent: function () {
          let a =/src=\"([^\"]*?)\">/gi;
          let b=this.editorContent.match(a);
          this.pic = b[0].slice(5,b[0].length - 2);

          let params ={
            username:this.$store.state.name,
            userpic:this.$store.state.headpic,
            pic:this.pic,
            title:this.title,
            content:this.editorContent,
            id:this.id
          };
          console.log(params)
          axios.post('/api/addArticle',params).then(res =>{
            if(res.data.msg =='文章添加成功'){
              this.$router.push('/');
              this.$message({message: res.data.msg});
            }else{
              this.$message({message: res.data.msg});
            }
          })
        }
      },
      mounted() {
        var editor = new E('#editorElem')
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
      }
    }
</script>

<style scoped lang="less">
.write{
  background: rgb(245,245,245);
}
.content{
  width: 1100px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  .content-title{
    font-size: 24px;
    font-weight: bolder;
    margin: 10px;
  }
  .title{
    width: 95%;
    box-sizing: border-box;
    height: 45px;
  }
  .id{
    width: 5%;
    float: right;
    box-sizing: border-box;
    height: 45px;
    font-size: 24px;
    text-align: center;
  }
  .send{
    width: 80px;
    text-align: center;
    font-size: 24px;
    padding: 5px 20px;
    margin: 20px 10px;
    color: #fff;
    border: 1px solid rgb(57,141,238);
    background: rgb(57,141,238);
    border-radius: 5px;
  }
}
</style>
