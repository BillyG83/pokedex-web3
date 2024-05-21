import { InputHTMLAttributes } from 'react'

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

interface AdditionalInputProps {
  id: string
  isLoading?: boolean
  label?: string
}

export type TInputProps = BaseInputProps & AdditionalInputProps
