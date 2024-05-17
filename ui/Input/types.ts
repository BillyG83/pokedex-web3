import { InputHTMLAttributes } from 'react'

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

interface AdditionalInputProps {
  id: string
  loading?: boolean
  label?: string
}

export type TInputProps = BaseInputProps & AdditionalInputProps
