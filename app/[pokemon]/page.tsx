import Image from 'next/image'
import { TPokemonSubset } from '@/types'
import { Pagination, PokemonCard, PokemonInfo } from '../components'
import styles from '../page.module.css'
import style from './style.module.css'

async function getData(pokemon: string) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

const Pokemon = async ({ params }: { params: { pokemon: string } }) => {
  const res: TPokemonSubset = await getData(params.pokemon)

  return (
    <section className={styles.main}>
      <h1>
        Web3 Pokedex: #{res?.id || '0'},{' '}
        <span className="cap">{res?.name || 'Unknown'}</span>
      </h1>

      <div className={style.wrap}>
        <div className={style.card}>
          <PokemonCard {...res}>
            {res?.sprites?.front_default && (
              <Image
                alt={params.pokemon}
                height={150}
                src={res.sprites.front_default}
                width={150}
              />
            )}
          </PokemonCard>
        </div>

        <div className={style.info}>
          <PokemonInfo {...res} />
          <Pagination id={Number(res?.id || 1)} />
        </div>
      </div>
    </section>
  )
}

export default Pokemon
