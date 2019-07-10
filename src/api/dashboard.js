import fetch from '@/utils/request'

export function getLogInfo( page = 1, pageSize = 10) {

  return fetch({
    url: '/api/logs/index',
    method: 'get',
    params: {
      pageSize,
      page
    },
  })
}
