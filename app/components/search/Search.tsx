'use client'
import { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllPokemonData } from '@/lib/pokemon'
import { TPokemonSubset } from '@/types'
import { ButtonBase, ButtonSecondary, Input } from '@/ui'
import styles from './styles.module.css'

const Search = () => {
  const [collection, setCollection] = useState<TPokemonSubset[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const getCollection = async () => {
      const pokemonList: TPokemonSubset[] = await getAllPokemonData()
      setCollection(pokemonList)
    }
    getCollection()
  }, [isOpen])

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || ''
    setCollection((prevState) => {
      return prevState.filter((pokemon) => pokemon.name.includes(value))
    })
  }

  return (
    <>
      <ButtonSecondary onClick={handleToggle}>Search &#x1F50D;</ButtonSecondary>
      {isOpen && (
        <div className={styles.overlay}>
          <ButtonBase className={styles.close} onClick={handleToggle}>
            &times;
          </ButtonBase>
          <div className={styles.inner}>
            <Input
              id="search"
              label="search for a Pokemon"
              onChange={handleSearch}
              type="search"
            />
            {collection.length > 0 && (
              <ul className={styles.list}>
                {collection.map((pokemon) => (
                  <li key={pokemon.id}>
                    <Link onClick={handleToggle} href={pokemon.name}>
                      {pokemon.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Search
