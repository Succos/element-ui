<template>
  <div class="app-footer">
    <footer style="width: 100%;background-color:#222;">
      <el-row class="footer-content">
        <el-col :xs="24" :sm="6" class="footer-logo">
          <a href="http://yzg.100zhuangxiu.cn/">
            <img src="https://www.dayujiedan.cn/wp-content/uploads/2019/06/logo_new.png" alt="">
          </a>
        </el-col>
        <el-col :xs="24" :sm="6" class="contact">
          <p>电话：400-100-2662&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>邮箱：guyuanzhuangxiu@qq.com</p>
          <p>客服：1534461118&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>地址：宁夏银川市兴庆区胜利南街嘉木花园</p>
        </el-col>
        <el-col :xs="24" :sm="6">
          <div class="Ios">
            <img src="https://www.dayujiedan.cn/wp-content/uploads/2019/06/180-1.png" alt="">
            <h3>Ios</h3>
          </div>
        </el-col>
        <el-col :xs="24" :sm="6">
          <div class="Android">
            <img src="https://www.dayujiedan.cn/wp-content/uploads/2019/06/180-1.png" alt="">
            <h3>Android</h3>
          </div>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>
<script>
    export default {
        name: 'AppFooter'
    }
</script>
<style lang="css" scoped>
  .footer-logo{
    text-align: center;
  }
  .footer-content{
    padding: 40px 0;
    margin: 0 auto

  }
  .contact{
    text-align: center;
  }
  .contact p{
    font-size: 14px;
    color: #fff;
    line-height: 37px;
  }
  .Ios,.Android{
    text-align: center;
    margin: 20px 0 0 32px;
    font-size: 12px;
    color: #fff;
  }

</style>
