import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { TPokemonSubset } from '@/types'
import { Card, buttonBaseStyles, buttonSecondaryStyles } from '@/ui'
import { CollectButton } from '../collectButton'

const PokemonCard = (props: TPokemonSubset) => {
  const extraInfo = `A ${props.types[0].type.name} type pokemon with a base exp of ${props.base_experience} and moves including ${props.abilities[0].ability.name}!`
  return (
    <Card
      title={props.name}
      description={extraInfo}
      cta={
        <>
          <CollectButton pokemonId={String(props.id)} />
          <Link
            className={clsx(
              buttonBaseStyles.buttonBase,
              buttonSecondaryStyles.buttonSecondary
            )}
            href={props.name}
          >
            Details &#8594;
          </Link>
        </>
      }
    >
      <Image
        alt={props.name}
        height={250}
        src={props.sprites.front_default}
        width={250}
      />
    </Card>
  )
}

export default PokemonCard
