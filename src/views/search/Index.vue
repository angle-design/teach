<template>
  <div class="search_body">
    <p>共<span>{{data.length}}</span>个搜索结果</p>
    <div v-for="(item, i) in data" :key="i"  @click="toCourse(item.bo_id)">
      <FileItem :item="item"></FileItem>
    </div>
  </div>
</template>

<script>
import FileItem from "../../components/FileItem";
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.axios
      .post("/api/index/System/getBooksList", {
        bo_name: this.$route.params.keyword
      })
      .then((res) => {
        if (res.data.code == 200) {
            this.data=[]
          this.data = res.data.data;
        }
      });
  },
  methods:{
      toCourse(id) {
      let { href } = this.$router.resolve({
        path: "/home/coursedetails/" + id,
      });
      window.open(href, "_blank");
    },
  },
  components: {
    FileItem,
  },
};
</script>

<style lang="less" scoped>
.search_body {
  width: 1160px;
  background: #fff;
  border: 1px solid #e4e4e4;
  padding: 30px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > P {
    display: inline-block;
    margin: 0 auto;
    border-radius: 30px;
    padding: 5px 10px;
    background: #f2f2f2;
    margin-bottom: 30px;
    span {
      color: #bd2025;
      margin: 0 2px;
    }
  }
  .resource_item {
    border: none;
    border-bottom: 1px solid #e4e4e4;
    &:hover {
      background: #f6f6f6;
      border: none;
      border-bottom: 1px solid #e4e4e4;
    }
  }
}
</style>