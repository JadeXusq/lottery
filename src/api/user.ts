import type { ILoginRequest, IUserInfo } from '@/types/user'

export interface IRank {
  userName: string;
  prize: number
}

export function login(data: ILoginRequest) {
  return new Promise<IUserInfo>(resolve => {
    resolve({
      userName: data.userName,
      phone: data.phone
    })
  })
}

export function getRankList() {
  console.log('getRank')
  return new Promise<IRank[]>(resolve => {
    resolve([
      { userName: '李白1', prize: 1 },
      { userName: '李白2', prize: 1 },
      { userName: '李白3', prize: 2 },
      { userName: '李白4', prize: 4 },
      { userName: '李白5', prize: 5 },
      { userName: '李白6', prize: 6 },
    ])
  })
}