import clsx from 'clsx'
import { TInputProps } from './types'
import styles from './styles.module.css'

const Input = ({ children, ...props }: TInputProps) => {
  return (
    <>
      <input
        {...props}
        className={clsx(styles.input)}
        type={props.type || 'text'}
      />
      {props.label && (
        <label
          className={styles.label}
          data-type={props.type || 'text'}
          htmlFor={props.id}
        >
          {props.label}
        </label>
      )}
    </>
  )
}

export default Input
