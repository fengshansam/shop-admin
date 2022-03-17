import request from '@/utils/request'
import { LoginInfo } from '@/types/api/common'

export const getLoginInfo = () => {
  return request<LoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}
