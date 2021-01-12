<!--  -->
<template>
  <div class="hot">
    <Title>热门课题</Title>
    <p class="hot_pic" @click="toDetails(hotNewData[0].toid)">
      <img class="scal" :src="hotNewData[0].n_img" /><span>{{
        hotNewData[0].title
      }}</span>
    </p>
    <ul>
      <li
        v-for="(item, i) in hotNewData.slice(1)"
        :key="i"
        @click="toDetails(item.toid)"
      >
        <CircleText :text="item.title"></CircleText>
      </li>
    </ul>
  </div>
</template>

<script>
import Title from "@/components/title.vue";
import CircleText from "@/components/text/CircleText.vue";
export default {
  name: "",
  data() {
    return {
      hotNewData: [],
    };
  },
  mounted() {
    this.axios.get("/api/index/System/getTopic").then((res) => {
      if (res.data.code == 200) {
        this.hotNewData = res.data.data;
      }
    });
  },
  methods: {
    toDetails(id) {
      let { href } = this.$router.resolve({
        path: "/home/topicdetails/" + id,
      });
      window.open(href, "_blank");
    },
  },
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
    cursor: pointer;
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