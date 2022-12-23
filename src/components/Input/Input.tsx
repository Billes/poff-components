import { FC, FormEvent, useState } from 'react'
import { InputProps, InputType } from './Input.types'
import classNames from '../../utils/joinClassNames'

const Input: FC<InputProps> = ({
  id,
  type = InputType.TEXT,
  disabled = false,
  required = false,
  placeholder,
  error,
  onChange,
  icon,
  name,
  value,
  ref,
  ...props
}) => {
  const [validationMessage, setValidationMessage] = useState<string>('')

  const onInvalid = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setValidationMessage(target.validationMessage)
  }

  const onBlur = (e: FormEvent) => {
    const target = e.target as HTMLInputElement

    // eslint-disable-next-line no-extra-boolean-cast
    if (!!validationMessage) {
      setValidationMessage(target.validationMessage)
    }
  }

  return (
    <div className='relative rounded-md shadow-sm'>
      {icon && (
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
          {icon}
        </div>
      )}

      <input
        id={id}
        ref={ref}
        className={classNames(
          'block w-full rounded-md',
          'border border-gray-300',
          'font-roboto font-light text-gray-900 sm:text-sm',
          'focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-75',
          'invalid:border-red-700 invalid:text-red-700 invalid:focus:ring-1 invalid:focus:ring-red-700',
          'focus:border-sky-600 focus:ring-1 focus:ring-sky-600',
          icon ? 'pl-9' : '',
        )}
        type={type}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onInvalid={onInvalid}
        {...props}
      />
      {!!validationMessage && (
        <span className='ml-2 text-xs text-red-500'>{error || validationMessage}</span>
      )}
    </div>
  )
}

export default Input
