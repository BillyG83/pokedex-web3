import { TPokemon } from '@/types'
import { PokemonCard } from './components'
import styles from './page.module.css'

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
          <PokemonCard
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </ul>
    </nav>
  )
}
