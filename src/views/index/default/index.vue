
<template>
  <div>
    <el-container>
      <el-main class="clearfloat">
        <app-content />
      </el-main>
      <el-main class="clearfloat">
        <app-service />
      </el-main>
      <el-main class="clearfloat">
        <app-information />
      </el-main>
      <el-footer class="clearfloat">
        &nbsp;
      </el-footer>
    </el-container>
  </div>
</template>
<style lang="css" scoped>
    .clearfloat:before,.clearfloat:after{content:""; display:table; line-height:0;visibility:hidden;}
</style>
<script>
    import AppContent from '@/views/index/default/content'
    import AppService from '@/views/index/default/service'
    import AppInformation from '@/views/index/default/information'
    export default {
        name: 'Default',
        components: {
            AppContent,
            AppService,
            AppInformation
        }
    }
</script>
