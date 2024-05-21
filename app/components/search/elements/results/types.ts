import { TPokemonSubset } from '@/types'

export interface IResultsProps {
  collection: TPokemonSubset[]
  handleClose: () => void
}
