import { FC } from 'react'
import { IconButtonProps, IconButtonType } from './IconButton.types'
import classNames from '../../utils/joinClassNames'

const IconButton: FC<IconButtonProps> = ({
  onClick,
  icon,
  type = IconButtonType.DEFAULT,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type='button'
      className={classNames(
        type === IconButtonType.PRIMARY ? 'bg-sky-600 !text-white focus:ring-sky-600' : '',
        type === IconButtonType.DANGER ? 'bg-red-700 !text-white focus:ring-red-700' : '',
        type === IconButtonType.DEFAULT ? 'bg-black !text-white focus:ring-black' : '',
        type === IconButtonType.ACCENT ? 'bg-fuchsia-300 !text-black focus:ring-fuchsia-300' : '',
        'inline-flex items-center rounded-full border border-transparent p-2 shadow-md hover:ring-4 hover:ring-white focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton
