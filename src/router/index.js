import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/amap/index'),
      meta: { title: '首页', icon: 'dashboard' },
      affix: true
    }]
  }]
export const asyncRoutes = [
  // {
  //   path: '/amap',
  //   component: Layout,
  //   redirect: '/amap',
  //   children: [{
  //     path: 'amp',
  //     name: 'Dashboards',
  //     component: () => import('@/views/amap/index'),
  //     meta: { title: '高德地图', icon: 'dashboard', roles: ['editor'] }
  //   }]
  // },
  {
    path: '/user',
    component: Layout,
    redirect: '/test',
    name: 'Nested',
    meta: {
      title: '用户管理',
      icon: 'user',
      roles: ['admin']
    },
    children: [{
      path: 'index',
      name: 'Dashboards',
      component: () => import('@/views/user/index'),
      meta: { title: '用户列表', icon: 'nested', roles: ['editor'] }
    },
      {
        path: 'permission',
        name: 'Dashboards',
        component: () => import('@/views/user/permission'),
        meta: { title: '权限管理', icon: 'permission' }
      },
      {
        path: 'role',
        name: 'Dashboards',
        component: () => import('@/views/user/role'),
        meta: { title: '角色管理', icon: 'password' }
      }
]
  },
  {
    path: '/device',
    component: Layout,
    redirect: '/device/index',
    name: 'Example',
    meta: { title: '设备管理', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/device/index'),
        meta: { title: '设备列表', icon: 'table' }
      },
      {
        path: 'category',
        name: 'Tree',
        component: () => import('@/views/device/category'),
        meta: { title: '分类管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/hospital',
    component: Layout,
    redirect: '/hospital/index',
    name: 'Example',
    meta: { title: '医院管理', icon: 'link' },
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/hospital/index'),
        meta: { title: '医院列表', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Tree',
        component: () => import('@/views/hospital/add'),
        meta: { title: '科室管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/index',
    name: 'Example',
    meta: {
      icon: 'example',
      title: '订单管理',
      roles: ['orders.index']
    },
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/order/index'),
        meta: { title: '订单列表', icon: 'table' }
      },
      {
        path: 'service',
        name: 'Tree',
        component: () => import('@/views/order/service'),
        meta: { title: '售后订单', icon: 'tree' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/index',
    name: 'Example',
    meta: { title: '内容管理', icon: 'eye' },
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/article/index'),
        meta: { title: '文章管理', icon: 'table' }
      },
      {
        path: 'post',
        name: 'Tree',
        component: () => import('@/views/article/post'),
        meta: { title: '广告管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '系统设置', icon: 'example' },
    children: [
      {
        path: 'upsetting',
        name: 'Table',
        component: () => import('@/views/system/upsetting'),
        meta: { title: '上传设置', icon: 'table' }
      },
      {
        path: 'cache',
        name: 'Tree',
        component: () => import('@/views/system/cache'),
        meta: { title: '缓存设置', icon: 'tree' }
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test',
    children: [{
      path: 'amp',
      name: 'Dashboards',
      component: () => import('@/views/test/index'),
      meta: { title: '测试组件', icon: 'dashboard' }
    }]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
