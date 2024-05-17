import web3 from './web3'
import PokedexFactory from './build/PokedexFactory.json'
import { address } from './address'

const abi = PokedexFactory.abi
const factory = new web3.eth.Contract(abi, address)

export default factory
