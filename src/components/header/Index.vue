<template>
  <header class="nav_top">
    <p></p>
    <div class="nav_right">
      <div class="search">
        <input type="text" placeholder="请输入关键字" />
        <span><font></font></span>
      </div>
      <span class="login" @click="goLogin">登陆</span>
    </div>
    <div class="pup" v-if="flag">
      <p v-html="codeData.img"></p>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      codeData: {},
      flag: false,
      loginflag:false,
    };
  },
  methods: {
    goLogin() {
      this.axios
        .get("/api/index/index/generrate")
        .then((res) => {
          if (res.data.code == 200) {
            console.log(res.data.data)
            this.flag = true;

            //  this.isLogin()
            this.codeData = res.data.data;
    
              setInterval(()=>{
                this.isLogin()
            },2000)
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
      if(this.loginflag) return;
      this.axios
        .get("/api/index/index/checkLogin", {
          params: { ticket: this.codeData.ticket},
        })
        .then((res) => {
          console.log(res)
          if (res.data.code == 200) {
            
            this.loginflag=true;
          } else {
            this.loginflag=true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
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