import request from '@/utils/request'

export function getArticleList(id) {
  return request({
    url: `/article/${id}/list`,
    method: 'get'
  })
}
