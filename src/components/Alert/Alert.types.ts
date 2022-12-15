export enum AlertType {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface AlertProps {
  type?: AlertType
  id?: string
  headline: string
  body?: string
  icon?: boolean
  closable?: boolean
  duration?: number
  destroy: () => void
}
