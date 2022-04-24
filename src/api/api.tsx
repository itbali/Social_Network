import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '7e1e898e-d5a3-4858-ba0e-1bec26fc14f0'
    }
})


export const samuraiApi = {

    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    authCheck() {
        return (
            instance.get(`auth/me`,).then(response => response.data)
        )
    },

    getProfile(id: string | undefined = '1') {
        return (
            instance.get(`profile/${id}`,).then(response => response.data)
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
