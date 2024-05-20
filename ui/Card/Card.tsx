import { ICardProps } from './types'
import styles from './styles.module.css'

const Card = ({
  children,
  cta,
  description,
  icon,
  image,
  subTitle,
  title,
}: ICardProps) => {
  return (
    <div aria-label="card" className={styles.card}>
      <div className={styles.heading}>
        <div>
          <h3>{title}</h3>
          {subTitle && (
            <div className={styles.subTitle}>
              <span aria-hidden="true">{subTitle.icon && subTitle.icon}</span>
              <p>{subTitle.text}</p>
            </div>
          )}
        </div>
        {icon && (
          <span aria-hidden="true" className={styles.icon}>
            {icon}
          </span>
        )}
      </div>
      {children && <div>{children}</div>}
      {image && <div>{image}</div>}
      {description && (
        <div className={styles.description}>
          <strong>Description</strong>
          <p>{description}</p>
        </div>
      )}
      {cta && <div className={styles.cta}>{cta}</div>}
    </div>
  )
}

export default Card
