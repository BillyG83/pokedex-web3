import Link from 'next/link'
import styles from './page.module.css'
import { TPokemon } from '@/types'

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const { results } = await getData()

  return (
    <nav className={styles.main}>
      <ul>
        {results.map((pokemon: TPokemon) => (
          <li key={pokemon.url}>
            <Link href={pokemon.name}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
