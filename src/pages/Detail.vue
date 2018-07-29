<template>
  <div class="detail">
    <Header></Header>
    <div class="middle">
      <h1>{{detailData.title}}</h1>
      <div class="content" v-html="detailData.content"></div>
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
          detailData:[]
        }
      },
      methods:{
        getData(){
          let id = this.$route.query.id;
          console.log(id);
          axios.post('/api/getArticleDetail','_id='+id).then(res => {
            this.detailData = res.data.data[0];
            console.log(res)
          })
        }
      },

      created(){
        this.getData()
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
  }

}
</style>
