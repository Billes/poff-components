import { ChangeEventHandler } from 'react'

export interface Item {
  itemKey: number
  name: string
}

export interface DroplistProps {
  dropListName: string
  Items: Item[]
  error?: string
  placeHolder?: string
  groupOption?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
