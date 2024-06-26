'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useInitUser } from '@/app/hooks'
import { ERoute } from '@/const'
import { useUserStore } from '@/store'
import styles from './styles.module.css'
import { Search } from '../search'

const Header = () => {
  const { address } = useAccount()
  const { initUser } = useInitUser()
  const { clearUser } = useUserStore()

  useEffect(() => {
    if (!address) {
      // user logs out
      return clearUser()
    }
    initUser(address)
  }, [address, clearUser, initUser])

  return (
    <header className={styles.header}>
      <Link href={ERoute.HOME} className={styles.home}>
        <Image alt="link home" height={40} src="/pokeball.png" width={40} />
      </Link>
      <ConnectButton />
      <Search />
    </header>
  )
}

export default Header
