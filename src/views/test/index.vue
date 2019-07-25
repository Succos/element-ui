<template>
  <div class="app-container">
    <ul class="menu" style="margin: 0 auto">
      <li v-for="(v,i) in menuData" :key="i" class="menu-item" @click="menuShow(v,i)">
        <a href="#">{{ v.title }}</a>
        <b :class="v.flag?'arrow-down':'arrow-up'">^^</b>
        <div v-show="v.flag">
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
                ]

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
            }
        }
    }
</script>
