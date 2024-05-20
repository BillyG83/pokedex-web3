import { TPokemonSubset } from '@/types'

export async function getPokemonList() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
    next: { revalidate: 86400 }, // Revalidate every 24 hours
  })
  const data = await res.json()
  return data.results // returns an array of { name, url }
}

export async function getAllPokemonData() {
  const pokemonList = await getPokemonList()

  const pokemonDetails = await Promise.all(
    pokemonList.map(async (pokemon: TPokemonSubset) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        {
          next: { revalidate: 86400 }, // Revalidate every 24 hours
        }
      )
      return res.json()
    })
  )

  return pokemonDetails
}
