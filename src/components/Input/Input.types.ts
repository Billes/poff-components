import { ChangeEventHandler } from 'react'

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
}

export interface InputProps {
  type?: InputType
  disabled?: boolean
  placeholder?: string
  error?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
