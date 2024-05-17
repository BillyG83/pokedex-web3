import { ButtonBase } from '../ButtonBase'
import { TButtonProps } from '../types'
import styles from './styles.module.css'

const ButtonPrimary = (props: TButtonProps) => {
  return <ButtonBase {...props} className={styles.buttonPrimary} />
}

export default ButtonPrimary
