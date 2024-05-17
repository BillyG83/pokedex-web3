import { ButtonBase } from '../ButtonBase'
import { TButtonProps } from '../types'
import styles from './styles.module.css'

const ButtonSecondary = (props: TButtonProps) => {
  return <ButtonBase {...props} className={styles.buttonSecondary} />
}

export default ButtonSecondary
