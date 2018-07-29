<template>
  <swiper class="swipe" autoplay="true">
    <swiperSlide v-for="item in swipeData"  class="swipe-item">
      <img :src="item.pic">
      <div class="title">{{item.title}}</div>
    </swiperSlide>
  </swiper>
</template>

<script>
  import axios from 'axios'
  import 'swiper/dist/css/swiper.css'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "Swipe",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swipeData: {}
      }
    },
    methods: {
      getSwipe() {
        axios.get('/api/getArticle').then(res => {
          this.swipeData = res.data.data
        })
      }
    },
    created() {
      this.getSwipe()
    }
  }
</script>

<style scoped lang="less">
  .swipe {
    width: 700px;
    height: 400px;
    .swipe-item {
      width: 700px;
      height: 400px;
      position: relative;
      overflow: hidden;
      img {
        width: 700px;
        height: 400px;
      }
      .title {
        width: 100%;
        height: 40px;
        color: white;
        font-size: 28px;
        text-align: center;
        line-height: 40px;
        background: rgba(0, 0, 0, .3);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
</style>
