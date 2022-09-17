import create from 'zustand'
import { persist } from 'zustand/middleware'

interface IState { 
    userType: 'user' | 'admin',
    login: (name: string, password: string) => void
}

const useUserStore = create<IState>()(
    persist((set) => ({
        userType: 'user',

        //* login
        login: (name, password) => {
            if (name === 'Andrew' && password === '###') set({userType: 'admin'})
        }
    }), 
    {
        name: 'userStore',
        getStorage: () => sessionStorage
    })
)

export default useUserStore