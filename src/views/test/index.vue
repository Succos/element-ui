<template>
  <div class="app-container">
    <ul class="menu" style="margin: 0 auto">
      <li v-for="(v,i) in menuData" :key="i" class="menu-item" @click="menuShow(v,i)"><a href="#">{{ v.title }}</a>
        <div v-show="v.childs&&v.childs.length>0">
          <ul class="submenu">
            <li v-for="(item,index) in v.childs" :key="index" class="menu-item"><a href="#">{{ item.title }}</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="css" scoped>
    * {
        padding: 0;
        margin: 0;
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

<script>
    export default {
        name: 'Test',
        data() {
            return {
                menuData: [
                    {
                        title: '一级菜单',
                        icon: 'el-icon-message',
                        classShow: true,
                        bigshowclass: false,
                        isSubShow: false
                    },
                    {
                        icon: 'el-icon-message',
                        title: '两级菜单',
                        bigshowclass: false,
                        isSubShow: false,
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
                ]

            }
        },
        methods: {
            menuShow(v, i) {
               if (v.childs && v.childs.length > 0) {
                    // 展开菜单
                   // 同时保证只有一个子菜单保持在菜单展开状态
               } else {
                   console.log(v.title)
               }
            }
        }
    }
</script>
