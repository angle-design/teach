<template>
  <div @click="toLogin()">注册</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toLogin() {
      let { href } = this.$router.resolve({
        path: "login", // 这里写的是要跳转的路由地址
        query: { goodsId: "1111" }, // 这里写的是页面参数
      });
      window.open(href, "_blank");
    },
  },
};
</script>

<style>
div {
  width: 500px;
  height: 400px;
  background: pink;
}
</style>