import { ButtonHTMLAttributes } from 'react'

type BaseTButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface AdditionalTButtonProps {
  /**
   * disables button and shows loading spinner
   */
  isLoading?: boolean
}

export type TButtonProps = BaseTButtonProps & AdditionalTButtonProps
