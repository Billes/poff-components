import { ReactNode } from 'react'

export enum IconButtonType {
  PRIMARY = 'primary',
  DANGER = 'danger',
  DEFAULT = 'default',
  ACCENT = 'accent',
}

export interface IconButtonProps {
  type?: IconButtonType
  icon: ReactNode
  disabled?: boolean
  onClick: () => void
}
