<template>
  <div class="app-hospital">
    <el-tabs :tab-position="tabPosition" style="height: auto;">
      <el-tab-pane label="放射科设备">
        <el-row :gutter="50">
          <el-col :md="6" :xs="24" class="bg-white">
            <el-row :gutter="10">
              <div style="text-align: center">
                <img src="http://www.scrayl.com/uploadfile/201941164615249.jpg" width="80%" height="80%" border="0">
                <div style="height: 30px;line-height: 30px;font-size: 13px"><p>设备名称</p></div>
              </div>
            </el-row>
          </el-col>
          <el-col :md="6" :xs="24" class="bg-white">
            <el-row :gutter="10">
              <div style="text-align: center">
                <img src="http://www.scrayl.com/uploadfile/201941164615249.jpg" width="80%" height="80%" border="0">
                <div style="height: 30px;line-height: 30px;font-size: 13px"><p>设备名称</p></div>
              </div>
            </el-row>
          </el-col>
          <el-col :md="6" :xs="24" class="bg-white">
            <el-row :gutter="10">
              <div style="text-align: center">
                <img src="http://www.scrayl.com/uploadfile/201941164615249.jpg" width="80%" height="80%" border="0">
                <div style="height: 30px;line-height: 30px;font-size: 13px"><p>设备名称</p></div>
              </div>
            </el-row>
          </el-col>
          <el-col :md="6" :xs="24" class="bg-white">
            <el-row :gutter="10">
              <div style="text-align: center">
                <img src="http://www.scrayl.com/uploadfile/201941164615249.jpg" width="80%" height="80%" border="0">
                <div style="height: 30px;line-height: 30px;font-size: 13px"><p>设备名称</p></div>
              </div>
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
         tabPosition: 'top',
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
        if (document.body.clientWidth < 1200) {
          // 组件加载时优先设置tab位置
          this.tabPosition = 'left'
        }
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
              this.tabPosition = 'left'
            } else {
              this.tabPosition = 'top'
            }
          }
      }
    }
</script>
