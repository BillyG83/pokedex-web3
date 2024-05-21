import clsx from 'clsx'
import { TInputProps } from './types'
import styles from './styles.module.css'

const Input = ({ children, ...props }: TInputProps) => {
  return (
    <>
      {props.label && (
        <label
          className={styles.label}
          data-type={props.type || 'text'}
          htmlFor={props.id}
        >
          {props.label}
        </label>
      )}
      <input
        {...props}
        className={clsx(styles.input)}
        disabled={props.disabled || props.isLoading}
        type={props.type || 'text'}
      />
    </>
  )
}

export default Input
