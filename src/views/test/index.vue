<template>
  <div class="app-container">
    <div style="width: 100%;height: 1px" />
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="2"
        layout="total, sizes, prev, pager, next, jumper"
        :total="8"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div></template>
<style lang="css" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .arrow-down{
      float: right;
      transform: rotate(180deg);
    }
    .arrow-up{
      float: right;
      transform: rotate(0deg);
    }
    .menu {
        list-style: none;
        background: #02a0e9;
    }
    .submenu {
        list-style: none;
        background: #1f2d3d;
    }
    .menu-item {
        float: left;
        width: 120px;
        height: auto;
        border: 1px solid #000;
        text-align: center;
    }
</style>
export default {
methods:
}

<script>
    export default {
      name: 'Test',
      data() {
        return {
          menuData: [
            {
              title: '一级菜单',
              icon: 'el-icon-message',
              flag: false,
              classShow: true,
              bigshowclass: false,
              isSubShow: false
            },
            {
              icon: 'el-icon-message',
              title: '两级菜单',
              bigshowclass: false,
              isSubShow: false,
              flag: true,
              childs: [
                {
                  icon: 'el-icon-loading',
                  title: '权限管理',
                  path: '',
                  showclass: false
                },
                {
                  icon: 'el-icon-bell',
                  title: '角色管理',
                  path: '',
                  showclass: false
                }
              ]
            },
            {
              icon: 'el-icon-message',
              title: '两级菜单er',
              bigshowclass: false,
              isSubShow: false,
              flag: true,
              childs: [
                {
                  icon: 'el-icon-loading',
                  title: '权限管理',
                  path: '',
                  showclass: false
                },
                {
                  icon: 'el-icon-bell',
                  title: '角色管理',
                  path: '',
                  showclass: false
                }
              ]
            }
          ],
          currentPage: 1

        }
      },
      methods: {
        menuShow(v, i) {
          if (v.childs && v.childs.length > 0) {
            // 展开菜单
            // 同时保证只有一个子菜单保持在菜单展开状态
            this.menuData.forEach(function(item, index) {
              item.flag = false
            })
            v.flag = !v.flag
          } else {
            console.log(v.title)
          }
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`)
        }
      }
    }
</script>
