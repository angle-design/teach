<template>
  <div class="top_nav">
    <div class="nav_list">
      <ul>
        <li v-for="(item, i) in list" :key="i" @click="toBlank(item.path)" :class="[i===0?'active':'']">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="nav_left">
      <div class="nav_con">
        <p>
          <span
            v-for="(item, i) in lesson"
            :key="i"
            @mouseenter="toTabLesson(item.p_id, i)"
            :class="[index == i ? 'active' : '']"
            >{{ item.p_name }}</span
          >
        </p>
        <ul>
          <li v-for="(item1, index) in subject.subject" :key="index" @click="toTeach(p_id,item1.s_id)">
            {{ item1.s_name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lesson: [],
      subject: {},
      index: 0,
      p_id:0,
      list: [
        { name: "首页", path: "/index" },
        { name: "资源下载", path: "/home/resource" },
        { name: "教研交流", path: "" },
        { name: "教育资讯", path: "/index" },
        { name: "课题进展", path: "/home/topic" },
        { name: "个人中心", path: "/home/my" },
      ],
    };
  },
  mounted() {
    //左侧课节
    this.axios.get("/api/index/System/indexBooksList").then((res) => {
      if (res.data.code == 200) {
        this.lesson = res.data.data;
        this.p_id=res.data.data[0].p_id;
        this.toTabLesson(res.data.data[0].p_id, this.index);
      }
    });
  },
  methods: {
    toTeach(a,b){
       let { href } = this.$router.resolve({
        path: '/home/resource'
        ,query: {p_id:a,s_id:b}
      });
      window.open(href, "_blank");
    },
    toTabLesson(id, index) {
      this.index = index;
      this.p_id=id;
      this.subject = this.lesson.find((item) => item.p_id == id);
      // console.log(this.subject)
    },
    // 跳转新窗口
    toBlank(path) {
      let { href } = this.$router.resolve({
        path: path,
      });
      window.open(href, "_blank");
    },
  },
};
</script>

<style  lang="less" scoped>
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.top_nav {
  position: relative;
  .nav_list {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    border-bottom: 1px solid #dedede;
    line-height: 44px;
    width: 100%;
    ul {
      width: 900px;
      padding-left: 40px;
      display: flex;
      justify-content: flex-end;
      margin: 0 auto;
      font-size: 16px;
      position: relative;
      z-index:2;
      li {
        margin: 0 30px;
        padding: 0 10px;
        cursor: pointer;
        &:hover{
          color: #b9151e;
          font-weight: bold;
        }
        &.active {
          color: #b9151e;
          font-weight: bold;
          border-bottom: 2px solid #b9151e;
        }
      }
    }
  }
  .nav_left {
    position: relative;
    z-index: 1;
    color: #fff;
    width: 1200px;
    margin: 0 auto;
    .nav_con {
      width: 186px;
      height: 508px;
      background: #868585;
    }
    p {
      height: 44px;
      line-height: 44px;
      display: flex;
      background: #b9151e;
      span {
        display: flex;
        flex: 1;
        justify-content: center;
        cursor: pointer;
        &.active {
          background: #868585;
        }
      }
    }
    ul {
      li {
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #939292;
        padding: 0 20px;
        text-align: left;
        position: relative;
        cursor: pointer;
        &:after {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          top: 50%;
          margin-top: -8px;
          right: 20px;
          background: url(@bgurl) no-repeat;
          background-size: @size;
          background-position: -124px -96px;
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>