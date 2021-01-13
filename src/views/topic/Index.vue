<!--  -->
<template>
  <div class="topic">
    <div class="research">
      <Title>课题研究</Title>
      <ul class="research_con">
        <li v-for="(item, i) in topList.topic" :key="i" @click="toDetails(item.toid)">
          <CircleText :text="item.title"
            ><span>{{ item.create_at }}</span></CircleText
          >
        </li>
      </ul>
    </div>
    <div class="series">
      <Title>丛书进展</Title>
      <ul class="series_con">
        <li v-for="(item, i) in topList.books" :key="i"  @click="toDetails(item.toid)">
          <CircleText :text="item.title"
            ><span>{{ item.create_at }}</span></CircleText
          >
        </li>
      </ul>
    </div>
    <div class="teacher">
      <Title>名师团队</Title>
      <ul class="teacher_con">
        <li v-for="(item, i) in topList.teacher" :key="i">
          <span><img :src="item.tc_img" /></span>
          <div>
            <h4>{{ item.tc_name }}</h4>
            <font>{{ item.position }}</font>
            <p>{{ item.tc_desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title.vue";
import CircleText from "@/components/text/CircleText.vue";
export default {
  name: "",
  data() {
    return {
      topList: [],
    };
  },
  components: {
    Title,
    CircleText,
  },
  mounted() {
    this.axios.get("/api/index/System/topicList").then((res) => {
      if (res.data.code == 200) {
        this.topList = res.data.data;
      }
    });
  },
  methods:{
     toDetails(id) {
      let { href } = this.$router.resolve({
        path: "/home/topicdetails/" + id,
      });
      window.open(href, "_blank");
    },
  }
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.topic {
  background: #f8f8f8;
  & > div {
    width: 1200px;
    margin: 30px auto 0;
    &:first-child {
      margin-top: 0;
    }

    ul {
      background: #fff;
      border: 1px solid #ececec;
      display: flex;
      padding: 20px 0;
      width: 100%;
      box-sizing: border-box;
      flex-wrap: wrap;
      li {
        width: 50%;
        padding: 10px 20px 10px 20px;
        box-sizing: border-box;
        span {
          font-size: 14px;
          color: #acacac;
          width: 160px;
          text-align: right;
        }
      }
      &.teacher_con {
        padding: 0 60px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        li {
          display: flex;
          width: 100%;
          padding: 20px 0;
          border-bottom: 1px solid #ececec;
          &:last-child {
            border-bottom: none;
          }
          span {
            width: 150px;
            height: 170px;
            overflow: hidden;
            margin-right: 30px;
            img {
              width: 150px;
              height: 170px;
              border-radius: 30px 0 30px 0;
            }
          }
          div {
            width: 900px;
            font-size: 16px;
            line-height: 26px;
            padding-top: 5px;
            h4 {
              font-size: 22px;
              color: #d81218;
              line-height: 45px;
            }
            font {
              background: #f4f4f4;
              padding: 3px 10px;
              margin-bottom: 20px;
              font-size: 18px;
              display: inline-block;
            }
            p {
            }
          }
        }
      }
    }
  }
}
</style>