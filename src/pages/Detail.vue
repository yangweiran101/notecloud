<template>
  <div class="detail">
    <Header></Header>
    <div class="middle">
      <h1>{{detailData.title}}</h1>
      <div style="text-align: center;font-size: 18px">作者:{{detailData.username}}</div>
      <div class="content" v-html="detailData.content"></div>
      <div class="detail-comment">
        <div class="comment-list" v-for="item in commentList">
          <div class="list-user">{{item.username}}</div>
          <div class="list-content">{{item.content}}</div>
        </div>
        <div class="comment-input">
          <input type="text" v-model="commentContent" class="input">
          <span @click="gotoComment">评论</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import axios from 'axios'
    export default {
      name: "Detail",
      components:{
          Header
      },
      data(){
        return{
          id:'',
          detailData:[],
          commentContent:'',
          commentList:[]
        }
      },
      methods:{
        getData(){
          let id = this.$route.query.id;
          axios.post('/api/getArticleDetail','_id='+id).then(res => {
            this.detailData = res.data.data[0];
          })
        },
        gotoComment(){
          if(this.$store.state.name ==''){
            this.$message('请登录后再进行评论');
          }else {
            let params = {
              username:this.$store.state.name,
              content:this.commentContent,
              article:this.$route.query.id,
            };
            axios.post('/api/addComment',params).then(res => {
              this.$message(res.data.msg);
              this.getComment()
            })
          }
        },
        getComment(){
          axios.get('/api/getComment',{params: {article: this.$route.query.id}}).then(res => {
            this.commentList = res.data.data
          })
        }
      },

      created(){
        this.getData();
        this.getComment();
      }
    }
</script>

<style scoped lang="less">
.detail{
  background: rgb(245,245,245);
  .middle{
    background: #fff;
    width: 1100px;
    box-sizing: border-box;
    margin: 20px auto;
    padding: 20px;
    h1{
      text-align: center;
      margin: 20px auto 50px;
    }
    img{
      display: block;
      margin: 10px auto;
    }
    .content{
      font-size: 30px;
      padding: 10px 20px;
    }
    .detail-comment{
      width: 100%;
      .comment-list{
        width: 80%;
        margin: 10px auto;
        padding: 5px;
        box-sizing: border-box;
        border: 1px solid rgb(57,141,238);
        border-radius: 3px;
        .list-user{
          font-size: 24px;
          font-weight: bolder;
          color: rgb(57,141,238);
          margin: 10px 20px;
        }
        .list-content{
          font-size: 20px;
          color: #333;
          margin-top: 5px;
          margin-left: 20px;
        }
      }
      .comment-input{
        width: 80%;
        margin: 10px auto;
        .input{
          width: 80%;
          height: 40px;
          box-sizing: border-box;
          line-height: 40px;
          font-size: 24px;
          border-radius: 5px;
          margin: 10px auto;
          padding: 5px 10px;
        }
        span{
          display: block;
          float: right;
          width: 18%;
          height: 40px;
          box-sizing: border-box;
          line-height: 40px;
          font-size: 24px;
          margin: 10px auto;
          border: 1px solid rgb(57,141,238);
          text-align: center;
          border-radius: 5px;
          font-weight: bolder;
          color: #fff;
          background: rgb(57,141,238);
        }
      }

    }
  }

}
</style>
