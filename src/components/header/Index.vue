<template>
  <header class="nav_top">
    <p></p>
    <div class="nav_right">
      <div class="search">
        <input type="text" placeholder="请输入关键字" v-model="keyword" />
        <span v-if="type == 1" @click="toSearch"><font></font></span>
        <span v-else @click="toSearch1"><font></font></span>
      </div>
      <span class="login" @click="goLogin" v-if="loginflag == 'false'"
        >登陆</span
      >
    </div>
    <div class="pup" v-if="flag">
      <p v-html="codeData.img"></p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    type: 0,
  },
  data() {
    return {
      keyword: "",
      codeData: {},
      flag: false,
      loginflag: false,
      unsername: "",
    };
  },
  mounted() {
    this.loginflag = localStorage.getItem("login");
    console.log(this.loginflag);
  },
  methods: {
    // 去搜索
    toSearch() {
      if (this.keyword == "") {
        this.$message({
          showClose: true,
          message: "请输入关键字哦～",
          type: "warning",
        });
        return;
      }
      let { href } = this.$router.resolve({
        path: "/home/search/" + this.keyword,
      });
      window.open(href, "_blank");
    },
    toSearch1() {
      if (this.keyword == "") {
        this.$message({
          showClose: true,
          message: "请输入关键字哦～",
          type: "warning",
        });
        return;
      }
      this.$router.push({ path: "/home/search/" + this.keyword });
    },
    goLogin() {
      this.axios
        .get("/api/index/index/generrate")
        .then((res) => {
          if (res.data.code == 200) {
            this.flag = true;
            this.codeData = res.data.data;
            setInterval(() => {
              this.isLogin();
            }, 2000);
          } else {
            console.log(res.data.desc);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //检测是不是登录了
    isLogin() {
      if (this.loginflag == "true") return;
      this.axios
        .get("/api/index/index/checkLogin", {
          params: { ticket: this.codeData.ticket },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.loginflag = "true";
            this.flag = false;
            this.unsername = res.data.data.unsername;
            localStorage.setItem("login", "true");
            this.$forceUpdate();
          } else if (res.data.code == 100006) {
            this.loginflag = "true";
          } else {
            this.loginflag = "false";
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="less" scoped>
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.nav_top {
  width: 1200px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > P {
    width: 175px;
    height: 64px;
    background: url(@bgurl) no-repeat;
    background-size: @size;
    background-position: -40px -24px;
  }
  .nav_right {
    display: flex;
    .search {
      width: 378px;
      height: 30px;
      border: 1px solid #c0c0c0;
      border-radius: 30px;
      line-height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 60px;
      overflow: hidden;
      input {
        width: 328px;
        height: 24px;
        margin-left: 10px;
      }
      span {
        display: flex;
        width: 50px;
        height: 30px;
        background: #363636;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font {
          background: url(@bgurl) no-repeat;
          background-size: @size;
          background-position: -68px -155px;
          display: block;
          width: 23px;
          height: 20px;
        }
      }
    }
    & > span {
      width: 62px;
      height: 28px;
      border: 1px solid #d1d1d1;
      line-height: 28px;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      &.register {
        background: #bd2025;
        color: #fff;
        border: 1px solid #bd2025;
        margin-left: 8px;
      }
    }
  }
}
.pup {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
  p {
    width: 200px;
    height: 200px;
  }
}
</style>