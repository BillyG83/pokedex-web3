import { ICardProps } from './types'
import styles from './styles.module.css'

const Card = ({
  children,
  cta,
  description,
  icon,
  subTitle,
  title,
}: ICardProps) => {
  return (
    <div aria-label="card" className={styles.card}>
      {children && <div className={styles.children}>{children}</div>}
      <div className={styles.heading}>
        {title && <h3>{title}</h3>}
        {subTitle && (
          <div className={styles.subTitle}>
            <span aria-hidden="true">{subTitle.icon && subTitle.icon}</span>
            <p>{subTitle.text}</p>
          </div>
        )}
        {icon && (
          <div aria-hidden="true" className={styles.icon}>
            {icon}
          </div>
        )}
      </div>
      {description && (
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      )}
      {cta && <div className={styles.cta}>{cta}</div>}
    </div>
  )
}

export default Card
