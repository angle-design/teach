<template>
  <div class="top_nav">
    <div class="nav_list">
      <ul>
        <li class="active">首页</li>
        <li>资源下载</li>
        <li>教研交流</li>
        <li>教育资讯</li>
        <li>课题进展</li>
        <li>个人中心</li>
      </ul>
    </div>
    <div class="nav_left">
      <div class="nav_con">
        <p><span class="active">小学</span><span>初中</span><span>高中</span></p>
        <ul>
          <li>语文</li>
          <li>数学</li>
          <li>英语</li>
          <li>物理</li>
          <li>化学</li>
          <li>生物</li>
          <li>历史</li>
          <li>地理</li>
          <li>政治</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="less" scoped>
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.top_nav {
  margin-top: 20px;
  position: relative;
  .nav_list {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    border-bottom: 1px solid #dedede;
    line-height: 44px;
    width:100%;
    ul {
      width: 900px;
      padding-left:40px;
      display: flex;
      justify-content: flex-end;
      margin: 0 auto;
      font-size: 16px;
      li {
        margin: 0 30px;
        padding:0 10px;
        cursor: pointer;
        &.active{
            color:#b9151e;
            border-bottom:2px solid #b9151e;
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
      background:#b9151e;
      span {
        display: flex;
        flex: 1;
        justify-content: center;
       
        &.active{
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
        &:after {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          top: 50%;
          margin-top: -8px;
          right:20px;
           background: url(@bgurl) no-repeat;
            background-size: @size;
            background-position: -124px -96px;
        }
        &:last-child{
            border-bottom:0;
        }
      }
    }
  }
}
</style>