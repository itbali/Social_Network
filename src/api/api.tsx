import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": '7e1e898e-d5a3-4858-ba0e-1bec26fc14f0'
  }
})


export const usersApi = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    )
  },
  follow(id: number) {
    return (
      instance.post(`/follow/${id}`,).then(response => response.data)
    )
  },
  unFollow(id: number) {
    return (
      instance.delete(`/follow/${id}`,).then(response => response.data)
    )
  }
}
export const profileAPI = {
  getProfile(id: string | undefined = '1') {
    return (
      instance.get(`profile/${id}`,).then(response => response.data)
    )
  },
  getStatus(userID: string) {
    return (
      instance.get(`profile/status/${userID}`,).then(response => response.data)
    )
  },
  updateStatus(status: string) {
    return (
      instance.put(`profile/status/`, {status}).then(response => response.data)
    )
  }
}
export const authAPI = {
  me() {
    return (
      instance.get(`auth/me`,).then(response => response.data)
    )
  },
  login(email: string, password: string, remember: boolean) {
    return (instance.post('auth/login', {email, password, remember}))
  },
  logout() {
    return (instance.post('auth/logout'))
  }
}
