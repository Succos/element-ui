<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in list" :key="o" class="text item">
      {{ '列表内容 ' + o }}
      <router-link :to="'/test/amp'" class="link-type">
        <span style="color: red">点我去看订单详情</span>
      </router-link>
    </div>
  </el-card>
</template>

<style>
    .amap-info-content{
      padding: 0 0 0 0;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>
<script>
    import { getRepairDetail } from '@/api/map.js'
    // 默认传入维修人员id，根据此id向后端发送ajax，渲染
  export default {
    name: 'AmapInfoWindow',
    props: {
      title: {
        type: String,
        default: 'no'
      }
    },
    data() {
        return {
            list: []
        }
    },
    mounted() {
      this.getData()
    },
    methods: {
        getData() {
          getRepairDetail().then(response => {
               this.list = response.data.items
          })
        }
    }
  }

</script>
