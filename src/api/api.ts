import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a68c16fd-b564-46c3-b168-8a8bf32018cc'
    }
})

export const usersAPI = {
    getUsers(currentPage:number, countOfUsersOnPage:number) {
        return instance.get(`users?page=${currentPage}&count=${countOfUsersOnPage}`)
            .then(response => response.data.items)
    }
}

export const followAPI = {
    follow(userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    login() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getUserInfo(userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status/`, {status}).then(response => response.data)
    }
}