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
        label="日期"
        width="180"
      />
      <el-table-column
        prop="name"
        label="设备"
        width="180"
      />
      <el-table-column
        prop="address"
        label="地址"
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
    export default {
        data() {
            return {
                tableData:
                    [{
                        date: '2016-05-02',
                        name: '001',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '002',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '003',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '004',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }],
                currentPage4: 4
            }
        },
        methods: {
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
