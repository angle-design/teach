<!--  -->
<template>
  <div class="resource_item">
    <img src="../assets/word.jpg" />
    <p>
      <b
        >初高中教材衔接初高中教材衔接初高中教材衔接 第1课时 数与式
        (课件PPT)-【优化指导】2020-2021学</b
      >
      <span><font>2020</font><font>人教版</font><font>必修一</font></span>
    </p>
    <slot></slot>
    <!-- <button><b></b>下载</button> -->
  </div>
</template>

<script>
export default {
  name:"",
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="less">
.resource_item {
  display: flex;
  height: 140px;
  padding: 0 160px 0 30px;
  position: relative;
  border: 1px solid #fff;
  align-items: center;
  &:hover {
    border: 1px solid #bd2025;
  }
  & > img {
    margin-right: 20px;
  }
  & > p {
    span {
      display: block;
      margin-top: 10px;
      font {
        padding: 2px 6px;
        background: #eeeeee;
        font-size: 14px;
        color: #999999;
        margin-right: 12px;
      }
    }
  }
  & > button {
    position: absolute;
    right: 30px;
    width: 85px;
    height: 28px;
    border-radius: 3px;
    color: #fff;
    background: #bd2025;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    b {
      width: 19px;
      height: 19px;
      display: inline-block;
      background: url(/static/img/icon.68f2ae6.png) no-repeat;
      background-size: 260px 260px;
      background-position: -154px -175px;
    }
  }
}
</style>