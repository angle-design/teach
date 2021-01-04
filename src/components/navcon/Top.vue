<template></template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style  lang="less" scoped>
.topnav {
  margin-top: 20px;
  border-bottom: 1px solid #dedede;
  ul {
    display: flex;
    font-size: 16px;
    li {
      margin: 0 30px;
      padding: 0 10px;
      cursor: pointer;
      &:hover{
        color: #b9151e;
        font-weight: bold;
      }
      &.active,
      &.router-link-active {
        font-weight: bold;
        color: #b9151e;
        border-bottom: 2px solid #b9151e;
      }
    }
  }
}
</style>