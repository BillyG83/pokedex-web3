export type TPokemonSubset = {
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  height: number
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  weight: number
}

export type TPokemon = {
  name: string
  url: string
}
