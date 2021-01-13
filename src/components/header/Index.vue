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
      <p v-else class="headbox">
        <img :src="info.u_headimg" />{{ info.username
        }}<font @click="loginOut">退出</font>
      </p>
    </div>
    <div class="pup" v-if="flag">
      <div class="pup_con">
        <h4>注册登陆典例教案</h4>
        <p v-html="codeData.img" class="code_img"></p>
        <span
          ><img
            src="https://xcx.static.tongbux.com/xcx/20191029/5db7aa2b01911.png"
          />微信扫码<br />扫码关注公众号登陆注册</span
        >
      </div>
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
      info: {},
    };
  },
  mounted() {
    this.loginflag = localStorage.getItem("login");
    if (this.loginflag == "true") {
      this.axios.get("/api/index/System/getUserInformation").then((res) => {
        if (res.data.code == 200) {
          this.info = res.data.data;
          localStorage.setItem("info", this.info);
        }
      });
    }
  },
  methods: {
    // 推出登陆
    loginOut() {
      localStorage.clear();
      this.axios.get("/api/index/index/logout").then((res) => {
        if (res.data.code == 200) {
          // localStorage.clear();
          window.localStorage.removeItem('info')
          window.localStorage.removeItem('login')
          location.reload();
          this.$router.push({ path: "/index" });
        }
      });
    },
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
            location.reload();
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
    height: 60px;
    align-items: center;
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
  z-index: 12;
}
.pup_con {
  width: 300px;
  height: 360px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -180px;
  margin-left: -150px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  h4 {
    font-size: 26px;
    font-weight: normal;
    line-height: 80px;
  }
  p {
    padding: 10px;
    border: 1px solid #cecece;
    & > img {
      width: 180px !important;
      height: 180px !important;
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 14px;
    align-items: center;
    line-height: 18px;
    margin-top: 10px;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
}
.headbox {
  display: flex;
  align-items: center;
  color: #333;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
  }
  font {
    padding: 2px 10px;
    background: #bd2025;
    border-radius: 5px;
    color: #fff;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: #c73d41;
    }
  }
}
</style>