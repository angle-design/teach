<!--  -->
<template>
  <div class="hot">
    <Title>热门资讯</Title>
    <p class="hot_pic">
      <img
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3130395866,2625106020&fm=26&gp=0.jpg"
      /><span>号码都是我们我的没打你是遂宁市</span>
    </p>
    <ul>
      <li><CircleText text="问问我我我问问我我我我哦我我我我"></CircleText></li>
      <li><CircleText text="问问我我我问问我我我我哦我我我我"></CircleText></li>
      <li><CircleText text="问问我我我问问我我我我哦我我我我"></CircleText></li>
    </ul>
  </div>
</template>

<script>
import Title from "@/components/title.vue";
import CircleText from "@/components/text/CircleText.vue";
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  components: {
    Title,
    CircleText,
  },
};
</script>
<style scoped lang="less">
.hot {
  padding: 15px;
  .hot_pic {
    width: 300px;
    height: 190px;
    overflow: hidden;
    position: relative;
    img {
      width: 300px;
      height: 190px;
    }
    span {
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 16px;
      text-align: center;
      height: 36px;
      width: 100%;
      line-height: 36px;
    }
  }
  ul {
    overflow: hidden;
    padding: 10px 0;

    li {
      padding: 3px 0;
      .circletext {
        font-size: 16px;
      }
    }
  }
}
</style>