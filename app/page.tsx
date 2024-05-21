import { getAllPokemonData } from '@/lib/pokemon'
import { TPokemonSubset } from '@/types'
import { PokemonCard } from './components'
import styles from './page.module.css'

export default async function Page() {
  const pokemonList: TPokemonSubset[] = await getAllPokemonData()
  return (
    <nav className={styles.main}>
      <ul className={styles.collection}>
        {pokemonList.map((pokemon: TPokemonSubset) => (
          <li key={pokemon.id}>
            <PokemonCard {...pokemon} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
