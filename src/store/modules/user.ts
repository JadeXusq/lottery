import { login } from '@/api/user'

import type { IUserState, ILoginRequest } from '@/types/user'

export const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    token: '',
    userInfo: {
      userName: '',
      phone: ''
    }
  }),
  getters: {
    userName: state => state.userInfo.userName,
    phone: state => state.userInfo.phone
  },
  actions: {
    login(data: ILoginRequest) {
      return login(data).then(res => {
        console.log(res)
        this.userInfo = res
      })
    }
  },
  persist: {
    key: 'user',
    paths: ['userInfo', 'token']
  }
})