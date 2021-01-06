<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <!-- 存放具体的轮播内容 -->
      <slot name="swiper-con"></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{ 'swiper-pagination': pagination }"></div>
  </div>
</template>

<script>
import Swiper from "../../../static/swiper.min";
import "../../../static/swiper.min.css";
export default {
  data() {
    return {
      mySwiper: null,
    };
  },
  props: {
    swipeid: {
      type: String,
      default: "",
    },
    effect: {
      type: String,
      default: "fade",
    },
    loop: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: "horizontal",
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    paginationType: {
      type: String,
      default: "bullets",
    },
    autoPlay: {
      type: Number,
      default: 3000,
    },
    slidesPerView: {
      type: Number,
      default: 1,
    },
    spaceBetween: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
  var that = this;
    this.mySwiper = new Swiper("." + this.swipeid, {
      //循环
      loop: this.loop, //分页器
      slidesPerView: this.slidesPerView,
      pagination: {
        el: '.' + this.swipeid +' .swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      direction: this.direction, //特效
      effect: this.effect, //用户操作swiper之后，不禁止autoplay
      disableOnInteraction: false, //修改swiper自己或子元素时，自动初始化swiper
      observer: true, //修改swiper的父元素时，自动初始化swiper
      observeParents: true,
      spaceBetween: this.spaceBetween,
      navigation: {
        nextEl: "." + this.swipeid + "next",
        prevEl: "." + this.swipeid + "prev",
      },
    })
  
  },
};
</script>
<style scoped lang="less">
</style>