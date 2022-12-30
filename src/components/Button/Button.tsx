import { FC } from 'react'
import { ButtonProps, ButtonType } from './Button.types'
import classNames from '../../utils/joinClassNames'

const IconButton: FC<ButtonProps> = ({
  onClick,
  text,
  type = ButtonType.DEFAULT,
  buttonType = 'button',
  disabled = false,
  extraClassNames = '',
  ...props
}) => {
  return (
    <button
      type={buttonType}
      className={classNames(
        type === ButtonType.PRIMARY ? 'bg-sky-600 !text-white focus:ring-sky-600' : '',
        type === ButtonType.DANGER ? 'bg-red-700 !text-white focus:ring-red-700' : '',
        type === ButtonType.DEFAULT ? 'bg-black !text-white focus:ring-black' : '',
        type === ButtonType.ACCENT ? 'bg-fuchsia-300 !text-black focus:ring-fuchsia-300' : '',
        'inline-flex justify-center rounded-md border border-transparent py-2 px-4 font-roboto text-sm font-bold shadow-md hover:ring-4 hover:ring-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        extraClassNames,
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  )
}

export default IconButton
