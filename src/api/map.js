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
export function getRepairDetail(data) {
  return request({
    url: '/repair/detail',
    method: 'get',
    data
  })
}
export function getHospitalList(data) {
  return request({
    url: '/hospital/list',
    method: 'get',
    data
  })
}
