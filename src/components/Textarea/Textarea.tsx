import React from 'react'
import { TextareaProps } from './Textarea.types'
import classNames from '../../utils/joinClassNames'

const Textarea: React.FC<TextareaProps> = ({
  disabled = false,
  placeholder,
  rows = 5,
  error,
  onChange,
  ...props
}) => {
  return (
    <div>
      <textarea
        className={classNames(
          'w-full rounded-md py-1 px-2 shadow-sm',
          'border border-gray-300',
          'font-roboto text-sm font-light text-gray-700',
          'focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-75',
          error ? 'border-red-700 text-red-700' : 'focus:border-sky-600',
        )}
        rows={rows}
        wrap='hard'
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      ></textarea>
      {error && <span className='ml-2 text-xs text-red-500'>{error}</span>}
    </div>
  )
}

export default Textarea
