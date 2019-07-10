import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/map/list',
    method: 'get',
    data
  })
}
export function getRepairList(data) {
  return request({
    url: '/repair/list',
    method: 'get',
    data
  })
}
