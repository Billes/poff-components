import { ChangeEventHandler } from 'react'

export interface TextareaProps {
  placeholder?: string
  value?: Text
  onChange?: ChangeEventHandler<HTMLAreaElement>
}
