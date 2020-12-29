<template>
  <div class="teach">
      <p><img src="@/assets/teachbg.jpg"></p>
    <div class="teach_body">
        <p><span class="active">教学思想理念</span><span>教学规划设计</span><span>教学策略方法</span><span>学习策略方法</span><span>考试评估分析</span></p>
        <div class="teach_con">
            <dl>
                <dt><img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg"></dt>
                <dd>
                    <h4>义务教育课程方案修订最新进展</h4>
                    <p>2019年初，教育部已启动义务教育课程修订工作，经过一年多的努力，在深入开展调研、精心组织修订、广泛征求意见的基础上，各方凝聚共识，完成了基础研究、顶层设计和整体规划等前期工作，形成了义务教育课程方案修订稿。</p>
                    <font>2020-12-21  22:45:30</font>
                </dd>
            </dl>
             <dl>
                <dd>
                    <h4>义务教育课程方案修订最新进展</h4>
                    <p>2019年初，教育部已启动义务教育课程修订工作，经过一年多的努力，在深入开展调研、精心组织修订、广泛征求意见的基础上，各方凝聚共识，完成了基础研究、顶层设计和整体规划等前期工作，形成了义务教育课程方案修订稿。</p>
                    <font>2020-12-21  22:45:30</font>
                </dd>
            </dl>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="less" scoped>
    .teach{
        background:#f8f8f8;
        padding-bottom:80px;
        
        &>P{
            width:100%;
            background:#297ac5;
            height:170rpx;
            overflow: hidden;
            img{
                width:1200px;
                display: block;
                margin:0 auto;
            }
        }
        .teach_body{
            width:1200px;
            margin:0 auto;
            margin-top:20px;
            &>p{
                width:100%;
                height:54px;
                font-size:18rpx;
                background:#ececec;
                line-height:54px;
                span{
                    padding:0 40px;
                    margin:0 20px;
                    display: inline-block;
                      &.active{
                    background:#bd2025;
                    color:#fff;
                }
                }
              
            }
            .teach_con{
                background:#fff;
                border:1px solid #ececec;
                dl{
                    padding:25px 30px;
                    border-bottom:1px solid #ececec;
                    display: flex;
                    dt{
                        width:154px;
                        height:98px;
                        margin-right:20px;
                        img{
                           width:154px;
                        height:98px; 
                        }
                    }
                    dd{
                        height:98px; 
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        h4{
                            font-size:18px;
                            line-height:30px;
                        }
                        p{
                            font-size:14px;
                            color:#666;
                        }
                        font{
                            font-size:14px;
                            color:#acacac;
                            margin-top:5px;
                        }
                    }
                }
            }
        }
    }
</style>