import { ChangeEventHandler } from 'react'

export interface TextareaProps {
  disabled?: boolean
  error?: string
  placeholder?: string
  rows?: number
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}
