import type { ILoginRequest, IUserInfo } from '@/types/user'

export function login(data: ILoginRequest) {
  return new Promise<IUserInfo>(resolve => {
    resolve({
      userName: data.userName,
      phone: data.phone
    })
  })
}