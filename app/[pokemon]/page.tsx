import Image from 'next/image'
import styles from '../page.module.css'
import style from './style.module.css'
import { PokemonSubset } from '@/types'
import { CollectButton } from '../components'

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
  const res: PokemonSubset = await getData(params.pokemon)

  return (
    <section className={styles.main}>
      <h1>{params.pokemon}</h1>
      {res.base_experience && <p>Base Exp: {res.base_experience}</p>}
      {res.height && <p>Height: {res.height}cm</p>}
      {res.weight && <p>Weight: {res.weight}kg</p>}
      {res.id && <p>Pokedex Number: {res.id}</p>}
      <p>
        Type:{' '}
        {res.types?.map((stat) => (
          <span className={style.stat} key={stat.type.url}>
            {stat.type.name}
          </span>
        ))}
      </p>
      {res.sprites.front_default && (
        <Image
          alt={params.pokemon}
          height={150}
          src={res.sprites.front_default}
          width={150}
        />
      )}

      <div>
        Abilities:
        <ul>
          {res.abilities?.map((item) => (
            <li key={item.ability.url}>{item.ability.name}</li>
          ))}
        </ul>
        <CollectButton pokemonId={String(res.id)} />
      </div>
    </section>
  )
}

export default Pokemon
