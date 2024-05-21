import Link from 'next/link'
import { IResultsProps } from './types'
import styles from './styles.module.css'

const Results = ({ collection, handleClose }: IResultsProps) => {
  return (
    <ul className={styles.list}>
      {collection.map((pokemon) => (
        <li key={pokemon.id}>
          <Link onClick={handleClose} href={pokemon.name}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Results
