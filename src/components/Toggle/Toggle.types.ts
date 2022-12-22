export interface ToggleProps {
  enabled: boolean
  label?: string
  description?: string
  disabled?: boolean
  onChange: (value: boolean) => void
  onClick?: () => void
}
