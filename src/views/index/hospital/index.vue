<template>
  <div class="app-hospital">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane label="放射科设备">
        <el-row :gutter="50">
          <el-col :md="6" :xs="24" class="bg-white">
            <el-row :gutter="10">
              <el-col :span="8">
                <img src="http://www.scrayl.com/uploadfile/201941164615249.jpg" width="100%" height="100%" border="0">
              </el-col>
              <el-col :span="16">
                <div style="height: 30px;text-align: left;line-height: 30px;font-size: 13px"><p>设备名称</p></div>
                <div style="height: 30px;text-align: right;line-height: 30px;color: #009fe8;font-size: 9px"><a>查看详情</a></div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :md="6" :xs="24" class="bg-white">
            <el-row :gutter="10">
              <el-col :span="8">
                <img src="http://www.scrayl.com/uploadfile/201941164615249.jpg" width="100%" height="100%" border="0">
              </el-col>
              <el-col :span="16"><p>西门子CT维修</p></el-col>
            </el-row>
          </el-col>
          <el-col :md="6" :xs="24" class="bg-white">
            <el-row :gutter="10">
              <el-col :span="8">
                <img src="http://www.scrayl.com/uploadfile/201941164615249.jpg" width="100%" height="100%" border="0">
              </el-col>
              <el-col :span="16">
                <el-row :gutter="10">
                  <el-col :span="24">10</el-col>
                  <el-col :span="24">10</el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
          <el-col :md="6" :xs="24" class="bg-white">
            <el-row :gutter="10">
              <el-col :span="8">
                <img src="http://www.scrayl.com/uploadfile/201941164615249.jpg" width="100%" height="100%" border="0">
              </el-col>
              <el-col :span="16"><p>西门子CT维修</p></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="超声科设备">超声科设备维修</el-tab-pane>
      <el-tab-pane label="手术室设备">手术室设备维修</el-tab-pane>
      <el-tab-pane label="化验室设备">化验室设备维修</el-tab-pane>
      <el-tab-pane label="心电监护">心电监护系列维修</el-tab-pane>
      <el-tab-pane label="康复理疗">康复理疗设备维修</el-tab-pane>
      <el-tab-pane label="男科设备">男科设备维修</el-tab-pane>
      <el-tab-pane label="妇科设备">妇科设备维修</el-tab-pane>
      <el-tab-pane label="其它设备">其它设备维修</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="css" scoped>
    .el-col-content{
      border: 1px solid #000;
      background: red;
    }
    .flex-row{
      display: flex;
      flex-direction: row;
    }
  .bg-white{
    background: #fafafa;
    border-bottom: 2px solid #fff
  }
</style>

<script>
    export default {
        name: 'Hospital',
      data() {
       return {
         tabPosition: 'left',
         screenWidth: 1000
       }
      },
      watch: {
          screenWidth(val) {
            if (!this.timer) {
              this.screenWidth = val
              this.timer = true
              const that = this
              setTimeout(function() {
                console.log(that.screenWidth)
                that.auto()
                that.timer = false
              }, 400)
            }
          }
      },
      mounted() {
          const that = this
        window.addEventListener('resize', function() {
          return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
          })()
        })
      },
      methods: {
          auto() {
            if (this.screenWidth < 1200) {
              console.log('收起来')
              this.tabPosition = 'left'
            } else {
              console.log('展开')
              this.tabPosition = 'top'
            }
          }
      }
    }
</script>
