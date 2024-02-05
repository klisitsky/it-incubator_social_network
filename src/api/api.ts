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
            .then(response => response.data)
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
    me() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
          .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
          .then(response => response.data)
    },
    getCapthaUrl() {
        return instance.get('security/get-captcha-url')
          .then(response => response.data)
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
    },
    setUserPhoto(newPhoto: any) {
        const formData = new FormData()
        formData.append('image', newPhoto)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}