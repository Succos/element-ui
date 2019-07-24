<template>
  <el-main class="app-join">
      <div class="banner bannerBox">
      <a href="http://yzg.100zhuangxiu.cn/yizhaogong.html">
          <img src="http://yzg.100zhuangxiu.cn/wp-content/uploads/2019/06/2.jpg" alt="">
      </a>
    </div>
    <div class="app-service">
      <el-row class="service-process">
        <h3>加入流程</h3>
        <h4>Join process</h4>
      </el-row>
      <el-row class="service-main">

        <ul class="service-list clearfix">
          <li>
            <span class="ser-jt" />
            <a href="javascript:;">
              <div class="pic">
                <img src="http://yzg.100zhuangxiu.cn/wp-content/themes/spfish/images/ico_work_01.png">
              </div>
              <p>下载安装</p>
            </a>
          </li>
          <li>
            <span class="ser-jt" />
            <a href="javascript:;">
              <div class="pic">
                <img src="http://yzg.100zhuangxiu.cn/wp-content/themes/spfish/images/ico_work_02.png">
              </div>
              <p>注册/认证</p>
            </a>
          </li>
          <li>
            <span class="ser-jt" />
            <a href="javascript:;">
              <div class="pic"><img src="http://yzg.100zhuangxiu.cn/wp-content/themes/spfish/images/ico_work_03.png"></div>
              <p>选择抢单</p>
            </a>
          </li>
          <li>
            <span class="ser-jt" />
            <a href="javascript:;">
              <div class="pic"><img src="http://yzg.100zhuangxiu.cn/wp-content/themes/spfish/images/ico_work_04.png"></div>
              <p>师傅上门</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="pic"><img src="http://yzg.100zhuangxiu.cn/wp-content/themes/spfish/images/ico_work_06.png"></div>
              <p>完工验收</p>
            </a>
          </li>
        </ul>
      </el-row>
    </div>
  </el-main>
</template>
 <script>
          export default {
              name: 'AppService'
          }
 </script>
<style lang="css" scoped>
    .app-join{
        width: 100%;
    }
    .banner img{
        width: 100%;
    }
          .service-process h4 {
              margin-top: 0.48rem;
              font-size: 0.8rem;
              color: #aaa;
              text-transform: uppercase;
          }
          .service-process h3 {
              font-size:1.2rem;
          }
          .service-process {
              text-align: center;
              margin-top: 1rem;}

          .service-process h3:before {
              content: "";
              display: inline-block;
              vertical-align: middle;
              width: 2.26rem;
              height: 0.12rem;
              background: url("../../../assets/index/icon8.png") no-repeat;
              background-size: 100% 100%;margin-right: 0.40rem;}
          .service-process h3:after {
              content: "";
              display: inline-block;
              vertical-align: middle;
              width: 2.26rem;height: 0.12rem;
              background: url("../../../assets/index/icon9.png") no-repeat; background-size: 100% 100%;margin-left: 0.40rem;}

          .app-service {
              padding: 0.02rem 0 0.6rem 0;
              background: url("../../../assets/index/service_bg_img.jpg") no-repeat center;
              background-size: cover;
          }
          .service-list {
              margin-top: 0.45rem;
              list-style: none;
              padding-left: 0
          }
          .service-list li {
              float: left;
              width: 20%;
              text-align: center;
              position: relative; }
          .service-list li a {
              display: block;
          }
          .service-list li .pic {
              width: 3rem;
              height: 3rem;
              margin: 0 auto;
              line-height:3rem;
              border-radius: 50%;
              background: linear-gradient(to bottom,#3ec2ff,#02a0e9);}
          .service-list li .pic img {
              width: auto;
              height: 1rem;
              vertical-align: middle;
          }
          .service-list li p {
              margin-top: 0.2rem;
              line-height: 1.6rem;
              font-size: 0.8rem;
              color: #666;}
          .service-list li span.ser-jt {
              position: absolute;
              width: 0.8rem;
              height: 0.28rem;
              background: url("../../../assets/index/menuarrow.png") no-repeat center; background-size: auto 100%;
              top: 1.6rem;
              right: -0.48rem;}
      </style>
