import { ReactNode } from 'react'

export interface ICardProps {
  /**
   * render Next Image or other content on top of the card
   */
  children: ReactNode
  /**
   * call to action buttons or links
   */
  cta?: ReactNode
  /**
   * a short descriptive text about this product or offering
   */
  description?: string
  /**
   * renders any icon in the heading of the card
   */
  icon?: ReactNode
  /**
   * subtitle must have text and can render any icon
   */
  subTitle?: {
    text: string
    icon?: ReactNode
  }
  /**
   * heading text of the card
   */
  title?: string
}
