import web3 from './web3'
import Pokedex from './build/Pokedex.json'

export const pokedex = (address: string) => {
  const abi = Pokedex.abi
  return new web3.eth.Contract(abi, address)
}
