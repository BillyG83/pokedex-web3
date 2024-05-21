import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { TPokemonSubset } from '@/types'
import { Card, buttonBaseStyles, buttonSecondaryStyles } from '@/ui'
import { CollectButton } from '../collectButton'

const PokemonCard = (props: TPokemonSubset) => {
  const extraInfo = `A ${(props?.types?.length && props.types[0]?.type?.name) || 'Unknown'} type pokemon with a base exp of ${props?.base_experience || 0} and moves including ${(props?.abilities?.length && props.abilities[0]?.ability?.name) || 'Unknown'}!`
  return (
    <Card
      title={props.name}
      description={extraInfo}
      cta={
        <>
          <CollectButton pokemonId={String(props.id)} />
          {props?.name && (
            <Link
              className={clsx(
                buttonBaseStyles.buttonBase,
                buttonSecondaryStyles.buttonSecondary
              )}
              href={props.name}
            >
              Details &#8594;
            </Link>
          )}
        </>
      }
    >
      {props?.sprites?.front_default && (
        <Image
          alt={props.name}
          height={250}
          src={props.sprites.front_default}
          width={250}
        />
      )}
    </Card>
  )
}

export default PokemonCard
