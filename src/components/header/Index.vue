<template>
  <header class="nav_top">
    <p></p>
    <div class="nav_right">
      <div class="search">
        <input type="text" placeholder="请输入关键字" />
        <span><font></font></span>
      </div>
      <span class="login">登陆</span>
      <span class="register">注册</span>
    </div>
  </header>
</template>

<script>
export default {};
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
        align-items:center;
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
</style>