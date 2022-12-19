export enum ButtonType {
  PRIMARY = 'primary',
  DANGER = 'danger',
  DEFAULT = 'default',
  ACCENT = 'accent',
}

export interface ButtonProps {
  type?: ButtonType
  text: string
  disabled?: boolean
  onClick: () => void
}
