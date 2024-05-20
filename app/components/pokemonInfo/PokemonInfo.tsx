import Link from 'next/link'
import clsx from 'clsx'
import { TPokemonSubset } from '@/types'
import { buttonBaseStyles, buttonSecondaryStyles } from '@/ui'
import styles from './style.module.css'
import { ERoute, EUrl } from '@/const'

const PokemonCard = (props: TPokemonSubset) => {
  return (
    <>
      {props.base_experience && (
        <p>&#9733; Base Exp: {props.base_experience}</p>
      )}

      {props.height && <p>&#8597; Height: {props.height} centimeters</p>}
      {props.weight && <p>&#9878; Weight: {props.weight} grams</p>}

      <p>
        &#9964; Type:{' '}
        {props.types?.map((stat) => (
          <span className={styles.stat} key={stat.type.url}>
            {stat.type.name}
          </span>
        ))}
      </p>

      <div>
        &#9967; Abilities:
        <ul>
          {props.abilities?.map((item) => (
            <li key={item.ability.url}>{item.ability.name}</li>
          ))}
        </ul>
        <Link
          className={clsx(
            buttonBaseStyles.buttonBase,
            buttonSecondaryStyles.buttonSecondary
          )}
          href={`${EUrl.WIKI}${props.name}`}
          target="_blank"
        >
          {props.name} Wikipedia
        </Link>
        <Link
          className={clsx(
            buttonBaseStyles.buttonBase,
            buttonSecondaryStyles.buttonSecondary
          )}
          href={`${EUrl.IMAGES}${props.name}`}
          target="_blank"
        >
          {props.name} Images
        </Link>
        <Link
          className={clsx(
            buttonBaseStyles.buttonBase,
            buttonSecondaryStyles.buttonSecondary
          )}
          href={`${EUrl.VIDEO}${props.name}`}
          target="_blank"
        >
          {props.name} Videos
        </Link>
        <Link
          className={clsx(
            buttonBaseStyles.buttonBase,
            buttonSecondaryStyles.buttonSecondary
          )}
          href={ERoute.HOME}
        >
          home
        </Link>
      </div>
    </>
  )
}

export default PokemonCard
