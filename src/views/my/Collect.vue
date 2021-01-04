<!--  -->
<template>
  <div class="collect">
    <p><span class="active">资源下载</span><span>教育资讯</span><span>课题进展</span></p>
    <div class="file">
      <FileItem><button>取消收藏</button></FileItem>
    </div>
  </div>
</template>

<script>
import FileItem from "../../components/FileItem";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    FileItem,
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="less">
.collect {
  &>P{
    margin:0 30px;
    padding:0 10px;
    border-bottom: 1px solid #dedede;
    display: flex;
    font-size: 16px;
    margin-bottom:20px;
    span {
      margin: 0 30px;
      padding:10px 10px;
      cursor: pointer;
      display:flex;
      &:hover{
        font-weight: bold;
        color: #b9151e;
      }
      &.active,
      &.router-link-active {
        font-weight: bold;
        color: #b9151e;
        border-bottom: 2px solid #b9151e;
    }
  }
  }
  .file {
    button {
      background: #fff;
      border: 1px solid #bd2025;
      color: #bd2025;
    }
  }
}
</style>