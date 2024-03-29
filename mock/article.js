import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/article/[A-Za-z0-9]/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        status: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
