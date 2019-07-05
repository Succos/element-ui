<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180"
    />
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
    />
    <el-table-column
      prop="address"
      label="地址"
    />
  </el-table>
</template>

<script>
  import { getArticleList } from "@/api/article";
  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      getArticleList(3).then(response=>{
        console.log(response)
      })
      this.$store.dispatch('login/article', 15).then(() => {
        console.log('dispatch执行完之后')
      }).catch(() => {
        console.log('补货了浴场')
      })
    }
  }
</script>
