import create from 'zustand'
import { persist } from 'zustand/middleware'

interface IState { 
    userType: 'user' | 'admin',
    login: (name: string, password: string) => void,
    isAdmin: () => boolean
}

const useUserStore = create<IState>()(
    persist((set, get) => ({
        userType: 'user',

        //* login
        login: (name, password) => {
            if (name === 'Andrew' && password === '###') set({userType: 'admin'})
        },

        //* is admin
        isAdmin: () => get().userType === 'admin'
    }), 
    {
        name: 'userStore',
        getStorage: () => sessionStorage
    })
)

export default useUserStore