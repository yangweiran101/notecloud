<template>
    <div class="search">
      <Header></Header>
      <div class="search-box">
          <input type="text" placeholder="请输入关键字"><span>搜索</span>
      </div>
      <div class="search-list">
        <div class="list-header">
          <div class="right">相关笔记</div>
        </div>
        <div class="list-detail" v-for="item in listData" style="cursor: pointer" @click="gotoDetail(item.id)">
          <div class="header">
            <div class="fleft">
              <img src="../assets/img/pic1.jpg" alt="">
            </div>
            <div class="fright">
              <div class="name">
                <span class="username">笔记丸子</span>|
                <span class="title">{{item.title}}</span>
              </div>
              <div class="status">
                <span style="margin-right: 20px">浏览:445</span>
                <span style="margin-right: 20px">回复:2</span>
                <span style="margin-right: 20px">分类:类库框架</span>
              </div>
            </div>
          </div>
          <div class="content" style="clear: both" v-html="item.content"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
  import  axios from  'axios'
    export default {
      name: "Search",
      components:{
          Header
      },
      data(){
        return{
          listData:[]
        }
      },
      methods:{
        getData(){
          axios.get('/api/getArticle').then(res => {
            this.listData = res.data.data
          })
        },
        gotoDetail(id){
          this.$router.push({path:'/Detail',query:{id}})
        }
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped lang="less">
.search{
  background: rgb(245,245,245);
  .search-box{
    width: 1100px;
    margin: 20px auto;
    input{
      width: 980px;
      height: 60px;
      color: rgb(155,155,155);
      background: #fff;
      font-size: 24px;
      padding: 10px 10px 10px 30px;
      line-height: 60px;
      box-sizing: border-box;
      border-radius: 5px 0 0 5px;
    }
    span{
      float: right;
      display: block;
      width: 120px;
      height: 60px;
      box-sizing: border-box;
      background: rgb(57,141,238);
      border: 1px solid rgb(57,141,238);
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      color: white;
      border-radius:0 5px 5px 0;
      cursor: pointer;
    }
  }
  .search-list{
    clear: both;
    width: 1100px;
    margin: 0 auto;
    padding: 20px 20px;
    box-sizing: border-box;
    background: #fff;
    .list-header{
      padding: 10px 20px;
      border-bottom: 1px solid rgb(225,225,225);
      .right{
        font-size: 30px;
        font-weight: bolder;
      }

    }
    .list-detail{
      clear: both;
      margin-top: 10px;
      .header{
        padding: 0 10px;
        .fleft{
          float: left;
          padding: 10px;
          img{
            width: 80px;
            height: 100px;
          }
        }
        .fright{
          float: left;
          padding: 10px;
          .name{
            margin-bottom: 10px;
            .username{
              color: rgb(57,141,238);
              font-size: 20px;
              font-weight: 800;
            }
            .title{
              color: #333;
              font-size: 24px;
              font-weight: 700;
            }
          }
          .status{
            background: rgb(244,245,247);
            width: 900px;
            height: 50px;
            font-size: 20px;
            line-height: 50px;
            font-weight: 600;
            color: rgb(167,167,167);
          }
        }
      }
      .content{
        padding: 10px 10px;
        margin-bottom: 10px;
        height: 100px;
        color: rgb(155,155,155);
        overflow: hidden;
      }
    }
  }
}
</style>
