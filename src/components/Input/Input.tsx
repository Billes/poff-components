import React, { FC } from 'react'
import { InputProps, InputType } from './Input.types'
import classNames from '../../utils/joinClassNames'

const Input: FC<InputProps> = ({
  type = InputType.TEXT,
  disabled = false,
  placeholder,
  error,
  onChange,
  icon,
  name,
  ...props
}) => (
  <div className='relative rounded-md shadow-sm'>
    {icon && (
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
        {icon}
      </div>
    )}

    <input
      className={classNames(
        'block w-full rounded-md',
        'border border-gray-300',
        'font-roboto font-light text-gray-700 sm:text-sm',
        'focus:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-75',
        icon ? 'pl-9' : '',
        error
          ? 'border-red-700 text-red-700 focus:ring-1 focus:ring-red-700'
          : 'focus:border-sky-600 focus:ring-1 focus:ring-sky-600',
      )}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      {...props}
    />
    {error && <span className='ml-2 text-xs text-red-500'>{error}</span>}
  </div>
)

export default Input
