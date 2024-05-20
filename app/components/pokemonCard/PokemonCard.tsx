import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { TPokemonSubset } from '@/types'
import {
  Card,
  buttonBaseStyles,
  buttonPrimaryStyles,
  buttonSecondaryStyles,
} from '@/ui'

const PokemonCard = (props: TPokemonSubset) => {
  const extraInfo = `A ${props.types[0].type.name} type pokemon with a base exp of ${props.base_experience} and moves including ${props.abilities[0].ability.name}!`
  return (
    <Card
      title={props.name}
      cta={
        <>
          <Link
            className={clsx(
              buttonBaseStyles.buttonBase,
              buttonPrimaryStyles.buttonPrimary
            )}
            href={props.name}
          >
            Collect
          </Link>
          <Link
            className={clsx(
              buttonBaseStyles.buttonBase,
              buttonSecondaryStyles.buttonSecondary
            )}
            href={`https://bulbapedia.bulbagarden.net/wiki/${props.name}`}
            target="_blank"
          >
            Details &#8594;
          </Link>
        </>
      }
      description={extraInfo}
    >
      {props.sprites.front_default && (
        <Image
          alt={props.name}
          height={150}
          src={props.sprites.front_default}
          width={150}
        />
      )}
    </Card>
  )
}

export default PokemonCard
