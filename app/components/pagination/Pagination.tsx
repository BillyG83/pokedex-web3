import Link from 'next/link'
import clsx from 'clsx'
import {
  buttonPrimaryStyles,
  buttonBaseStyles,
  buttonSecondaryStyles,
} from '@/ui'
import { IPaginationProps } from './types'
import styles from './styles.module.css'

const Pagination = ({ id }: IPaginationProps) => {
  return (
    <nav className={styles.wrap}>
      <Link
        className={clsx(
          buttonBaseStyles.buttonBase,
          buttonSecondaryStyles.buttonSecondary
        )}
        href={`${id - 1}`}
      >
        Prev
      </Link>

      <Link
        className={clsx(
          buttonBaseStyles.buttonBase,
          buttonPrimaryStyles.buttonPrimary
        )}
        href={`${id + 1}`}
      >
        Next
      </Link>
    </nav>
  )
}

export default Pagination
