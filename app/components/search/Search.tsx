'use client'
import { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllPokemonData } from '@/lib/pokemon'
import { TPokemonSubset } from '@/types'
import { ButtonBase, ButtonSecondary, Input } from '@/ui'
import styles from './styles.module.css'
import { Results } from './elements'

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
        <div
          aria-label="Search for a Pokemon"
          className={styles.overlay}
          role="dialog"
        >
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
              <Results collection={collection} handleClose={handleToggle} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Search
