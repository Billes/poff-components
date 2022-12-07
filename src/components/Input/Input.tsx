import React, { FC } from 'react'
import { InputProps, InputType } from './Input.types'
import classNames from '../../utils/joinClassNames'

const Input: FC<InputProps> = ({
  type = InputType.TEXT,
  disabled = false,
  placeholder,
  error,
  onChange,
  ...props
}) => (
  <div>
    <input
      className={classNames(
        'w-full rounded-md py-1 px-2 shadow-sm',
        'border border-gray-300',
        'font-roboto text-sm font-light text-gray-700',
        'focus:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-75',
        error ? 'border-red-700 text-red-700' : 'focus:border-sky-600',
      )}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
    {error && <span className='ml-2 text-xs text-red-500'>{error}</span>}
  </div>
)

export default Input
