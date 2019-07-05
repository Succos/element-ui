import request from '@/utils/request'

export function getArticleList(data) {
  return request({
    url: '/article/list',
    method: 'get',
    data
  })
}
