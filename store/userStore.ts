import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { TUserStore, TUser } from '@/types'

const initUser = {
  storageAddress: null,
  totalCollected: null,
  trainer: null,
}

export const useUserStore = create(
  persist<TUserStore>(
    (set) => {
      return {
        user: initUser,

        clearUser: () => {
          set(() => {
            return {
              user: initUser,
            }
          })
        },

        setUser: (data: TUser) => {
          set((state) => {
            return {
              user: {
                ...state.user,
                ...data,
              },
            }
          })
        },
      }
    },
    {
      name: 'pokedex-web3--user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
