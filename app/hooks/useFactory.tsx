'use client'
import { useCallback, useState } from 'react'
import factory from '@/eth/factory'

export const useFactory = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createTrainer = useCallback(async (address: string) => {
    setIsFetching(true)
    try {
      const res = await factory.methods
        .createTrainer(address)
        .send({ from: address })
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Unable to create trainer'
      )
    }
    setIsFetching(false)
  }, [])

  const isTrainer = useCallback(async (address: string): Promise<boolean> => {
    setIsFetching(true)
    try {
      const res = await factory.methods.isRegistered(address).call()
      setIsFetching(false)
      return Boolean(res)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to fetch trainer storage'
      )
      setIsFetching(false)
      return false
    }
  }, [])

  const getStorage = useCallback(
    async (address: string): Promise<string | null> => {
      setIsFetching(true)
      try {
        const res = await factory.methods.getTrainerStorage(address).call()
        setIsFetching(false)
        return String(res)
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'Unable to fetch trainer storage'
        )
        setIsFetching(false)
        return null
      }
    },
    []
  )

  return {
    createTrainer,
    error,
    getStorage,
    isFetching,
    isTrainer,
  }
}
