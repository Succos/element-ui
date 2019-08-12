<template>
    <div class="app-footer">
        <footer style="width: 100%;background-color:#222;">
            <el-row class="footer-content">
                <el-col :xs="24" :sm="6" class="footer-logo">
                    <a href="http://weixiu.cn/">
                        <img src="@/assets/logo/logo-opcity.png" alt="">
                    </a>
                </el-col>
                <el-col :xs="24" :sm="6" class="contact" style="text-align: left;padding: 0 0 0 25px">
                    <p>电话：400-100-2662&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p>邮箱：guyuanzhuangxiu@qq.com</p>
                    <p>客服：1534461118&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p>地址：云南省昆明市盘龙区海伦中心1栋12楼</p>
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
    .footer-logo {
        text-align: center;
    }

    .footer-content {
        padding: 40px 0;
        margin: 0 auto

    }

    .contact {
        text-align: center;
    }

    .contact p {
        font-size: 14px;
        color: #fff;
        line-height: 37px;
    }

    .Ios, .Android {
        text-align: center;
        margin: 20px 0 0 32px;
        font-size: 12px;
        color: #fff;
    }
    .footer-content .contact p:before {
        content: "";
        display: inline-block;
        vertical-align: middle;
    }
    .footer-content .contact p:first-child:before {
        width: 21px;
        height: 18px;
        background: url("../../../../assets/index/icon13.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 10px;
    }

    .footer-content .contact p:nth-child(2):before {
        width: 21px;
        height: 18px;
        background: url("../../../../assets/index/icon10.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 10px;
    }

    .footer-content .contact p:nth-child(3):before {
        width: 21px;
        height: 21px;
        background: url("../../../../assets/index/icon11.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 10px;
    }

    .footer-content .contact p:nth-child(4):before {
        width: 21px;
        height: 24px;
        background: url("../../../../assets/index/icon12.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 10px;
    }

</style>
