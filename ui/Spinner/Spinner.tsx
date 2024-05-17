import { ISpinnerProps } from './types'
import styles from './styles.module.css'

const Spinner = ({ color = 'var(--normal-10)', text }: ISpinnerProps) => {
  return (
    <div aria-busy="true" className={styles.wrap} role="alert">
      <span className={styles.spinner} style={{ borderTopColor: color }} />
      {text && text}
    </div>
  )
}

export default Spinner
