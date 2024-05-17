import { useUserStore } from '@/store'
import { useFactory } from './useFactory'
import { useCallback } from 'react'

export const useInitUser = () => {
  const { setUser } = useUserStore()
  const { createTrainer, isTrainer, getStorage } = useFactory()

  const initUser = useCallback(
    async (address: string) => {
      // user is connected but maybe not registered
      const isUser = await isTrainer(address)
      if (!isUser) {
        // a wild trainer has appeared!
        alert(
          'Welcome new trainer, please sign in your wallet to create your account'
        )
        await createTrainer(address)
      }
      // set user storage contact in store
      const storageContract = await getStorage(address)
      setUser({ storageAddress: storageContract, trainer: address })
    },
    [createTrainer, getStorage, isTrainer, setUser]
  )

  return {
    initUser,
  }
}
