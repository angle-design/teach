<!--  -->
<template>
  <div class="hot">
    <Title>最热下载</Title>
    <p class="hot_pic" @click="toTeachDetails(hotNewData[0].books_id)">
      <img class="scal" :src="hotNewData[0].bo_cover" /><span>{{
        hotNewData[0].bo_name
      }}</span>
    </p>
    <ul>
      <li
        v-for="(item, i) in hotNewData.slice(1)"
        :key="i"
        @click="toTeachDetails(item.books_id)"
      >
        <CircleText :text="item.bo_name"></CircleText>
      </li>
    </ul>
  </div>
</template>

<script>
import Title from "@/components/title.vue";
import CircleText from "@/components/text/CircleText.vue";
export default {
  name: "",
  props:{
    type:0
  },
  data() {
    return {
      hotNewData: [],
    };
  },
  mounted() {
   this.axios
      .post("/api/index/System/getBooksList", { order: "bo_count" })
      .then((res) => {
        if (res.data.code == 200) {
          this.hotNewData = res.data.data;
        } else {
          // alert(res.data.descb);
        }
      });
  },
  methods: {
   
     toCourse(id) {
      let { href } = this.$router.resolve({
        path: "/home/coursedetails/" + id,
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