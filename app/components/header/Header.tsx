'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useInitUser } from '@/app/hooks'
import styles from './styles.module.css'
import { useUserStore } from '@/store'

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
      <Link href={'/'} className={styles.home}>
        <Image alt="link home" height={40} src="/pokeball.png" width={40} />
      </Link>
      <ConnectButton />
    </header>
  )
}

export default Header
