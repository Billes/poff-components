import { ChangeEventHandler, ReactNode, Ref } from 'react'

export enum InputType {
  TEXT = 'text',
  EMAIL = 'email',
  HIDDEN = 'hidden',
  NUMBER = 'number',
  PASSWORD = 'password',
  TEL = 'tel',
  URL = 'url',
  DATE = 'date',
  TIME = 'time',
  SEARCH = 'search',
}

export interface InputProps {
  id: string
  type?: InputType
  disabled?: boolean
  placeholder?: string
  error?: string
  name: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  icon?: ReactNode
  value: string | number
  required?: boolean
  ref?: Ref<HTMLInputElement>
}
