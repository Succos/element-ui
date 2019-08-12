<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        prop="date"
        label="id"
        width="180"
      />
      <el-table-column
        prop="title"
        label="标题"
        width="180"
      />
      <el-table-column
        prop="view_count"
        label="浏览次数"
      />
      <el-table-column label="操作">
        <template slot="header" slot-scope="scope">
          <el-input
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="text"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="margin-top: 1rem">
      <el-col :span="12">
        <el-button size="mini" @click="setCurrent()">取消选择</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
 import { getTopics } from '@/api/article';
  export default {
    data() {
      return {
        tableData:
       [{
          id: '2016-05-02',
          title: '王小san',
          view_count: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '2016-05-02',
          title: '王小san',
          view_count: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '2016-05-02',
          title: '王小san',
          view_count: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '2016-05-02',
          title: '王小san',
          view_count: '上海市普陀区金沙江路 1518 弄'
        }],
        currentPage4: 4
      }
    },
    mounted(){
      this.getTopics();
    },
    methods: {
      getTopics(){
      getTopics().then(response=>{
      console.log(response);
})
      },
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row)
      }
    }
  }
</script>
