<template>
    <div class="list">
      <div class="box" v-for="item in listData" style="cursor: pointer" @click="gotoDetail(item._id)">
        <div class="header">
          <div class="fleft">
            <img :src="item.userpic" >
          </div>
          <div class="fright">
            <div class="name">
              <span class="username">{{item.username}}</span>|
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
</template>

<script>
    export default {
        name: "List",
      data(){
          return{
            listData:{},
          }
      },
      methods:{
        getData(){
          this.$axios.get('getArticle').then(res => {
            this.listData = res.data;
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
.list{
  width: 700px;
  padding: 15px;
  background: #fff;
  box-sizing: border-box;
  .box{
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
            width: 400px;
            overflow: hidden;
          }
        }
        .status{
          background: rgb(244,245,247);
          width: 520px;
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
      color: rgb(155,155,155);
      overflow: hidden;
      height: 48px;
    }
  }

}
</style>
