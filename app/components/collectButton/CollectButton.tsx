'use client'
import { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { pokedex } from '@/ethereum/pokedex'
import { useUserStore } from '@/store'
import { ButtonPrimary } from '@/ui'
import { ICollectButton } from './types'

const CollectButton = ({ pokemonId }: ICollectButton) => {
  const { user } = useUserStore()
  const [hasCollected, setHasCollected] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const getDexData = async () => {
      if (!user.storageAddress || !user.trainer) return
      const usersDex = pokedex(user?.storageAddress)
      const isCollected: boolean = await usersDex.methods
        .hasCollected(pokemonId)
        .call({ from: user.trainer })
      setHasCollected(Boolean(isCollected))
    }
    getDexData()
  }, [pokemonId, user.storageAddress, user.trainer])

  const handleClick = async () => {
    if (!user.storageAddress || !user.trainer) return
    setIsFetching(true)
    try {
      const usersDex = pokedex(user?.storageAddress)
      await usersDex.methods.collect(pokemonId).send({ from: user.trainer })
      setHasCollected(true)
    } catch (error) {
      console.error(error)
    }
    setIsFetching(false)
  }

  if (!user.trainer) return <ConnectButton />
  return (
    <ButtonPrimary
      disabled={hasCollected}
      isLoading={isFetching}
      onClick={handleClick}
    >
      {hasCollected ? 'Got it!' : 'Collect'}
    </ButtonPrimary>
  )
}

export default CollectButton
