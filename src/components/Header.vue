<template>
  <div class="box">
    <div class="content">
      <div class="left" @click="backIndex">
        <h1 style="cursor: pointer">云笔记</h1>
      </div>
      <div class="right">
        <i class="iconfont icon-sousuo"></i>
        <span class="write">写笔记</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
      methods:{
        backIndex(){
          this.$router.push('/')
        }
      }
    }
</script>

<style scoped lang="less">
.box{
  background: rgb(57,141,238);
  height: 60px;
  .content{
    width: 1100px;
    margin: 0 auto;
    .left{
      color: white;
      float: left;
      h1{
        line-height: 60px;
        vertical-align: center;
        font-size: 30px;
        font-weight: 300;
      }
    }
    .right{
      float: right;
      color: white;
      line-height: 60px;
      .iconfont{
        font-size: 25px;
        margin: auto 10px;
      }
      .write{
        padding: 5px 20px;
        color: rgb(57,141,238);
        background: #fff;
        border-radius: 5px;
      }
    }
  }
}
</style>
