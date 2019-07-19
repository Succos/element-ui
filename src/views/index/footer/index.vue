<template>
  <div class="app-footer">
    <footer style="width: 100%;background-color:#222;">
      <div class="w footer-content clearfloat">
        <div class="ft-logo fl"><a href="http://yzg.100zhuangxiu.cn/"><img src="https://www.dayujiedan.cn/wp-content/uploads/2019/06/logo_new.png" alt=""></a></div>
        <div class="contact fl">
          <p>电话：400-100-2662&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>邮箱：guyuanzhuangxiu@qq.com</p>
          <p>客服：1534461118&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>地址：宁夏银川市兴庆区胜利南街嘉木花园</p>
        </div>
        <div class="ft-erweima fr">
          <div class="Ios">
            <img src="https://www.dayujiedan.cn/wp-content/uploads/2019/06/180-1.png" alt="">
            <h3>Ios</h3>
          </div>
          <div class="Android">
            <img src="https://www.dayujiedan.cn/wp-content/uploads/2019/06/180-1.png" alt="">
            <h3>Android</h3>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
    export default {
        name: 'AppFooter'
    }
</script>
<style>
  .w {width: 1200px;margin: 0 auto;}
  .footer-content {padding:40px 0;}
  .footer-content .ft-logo {margin-top: 50px;margin-right: 196px;}
  .footer-content .contact p {font-size: 14px;color:#fff;line-height: 37px;}
  .footer-content .contact p:before {content: "";display: inline-block;vertical-align: middle;}
  .footer-content .contact p:first-child:before{width: 21px;height: 18px;background: url("") no-repeat; background-size: 100% 100%;margin-right: 10px;}
  .footer-content .contact p:nth-child(2):before{width: 21px;height: 18px;background: url("") no-repeat; background-size: 100% 100%;margin-right: 10px;}
  .footer-content .contact p:nth-child(3):before{width: 21px;height: 21px;background: url("") no-repeat; background-size: 100% 100%;margin-right: 10px;}
  .footer-content .contact p:nth-child(4):before{width: 21px;height: 24px;background: url("") no-repeat; background-size: 100% 100%;margin-right: 10px;}
  .fw-img {width: 285px;height: 137px;overflow: hidden;}
  .fw-img:hover img {transition: all 0.3s;}
  .fw-img:hover img {transform: translate(-5px,-3px);}
  .ft-erweima .Ios,
  .ft-erweima .Android{display: inline-block; text-align: center;margin: 20px 0 0 32px;}
  .ft-erweima h3 {font-size: 12px;color: #fff;margin-top: 10px;}
  .clearfloat{*zoom:1;}
  .clearfloat:before,.clearfloat:after{content:""; display:table; line-height:0;visibility:hidden;}
  .clearfloat:after{ clear:both;}
  .fl {float: left;}
  .fr {float: right;}
</style>
