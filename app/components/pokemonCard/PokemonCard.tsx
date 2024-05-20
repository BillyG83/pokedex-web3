import Link from 'next/link'
import clsx from 'clsx'
import { TPokemon } from '@/types'
import { Card, buttonBaseStyles, buttonPrimaryStyles } from '@/ui'

const PokemonCard = ({ name, url }: TPokemon) => {
  return (
    <li key={url}>
      <Card
        title={name}
        cta={
          <Link
            className={clsx(
              buttonBaseStyles.buttonBase,
              buttonPrimaryStyles.buttonPrimary
            )}
            href={name}
          >
            info
          </Link>
        }
      ></Card>
    </li>
  )
}

export default PokemonCard
