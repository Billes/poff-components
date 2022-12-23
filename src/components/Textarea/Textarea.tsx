import { FC, FormEvent, useState } from 'react'
import { TextareaProps } from './Textarea.types'
import classNames from '../../utils/joinClassNames'

const Textarea: FC<TextareaProps> = ({
  id,
  disabled = false,
  required = false,
  placeholder,
  rows = 5,
  error,
  name,
  onChange,
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
    <div>
      <textarea
        id={id}
        className={classNames(
          'block w-full rounded-md py-1 px-2 shadow-sm',
          'border border-gray-300',
          'font-roboto font-light text-gray-900 sm:text-sm',
          'focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-75',
          'invalid:border-red-700 invalid:text-red-700 invalid:focus:ring-1 invalid:focus:ring-red-700',
          'focus:border-sky-600 focus:ring-1 focus:ring-sky-600',
        )}
        rows={rows}
        wrap='hard'
        disabled={disabled}
        required={required}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        onInvalid={onInvalid}
        {...props}
      ></textarea>
      {!!validationMessage && <span className='ml-2 text-xs text-red-500'>{error}</span>}
    </div>
  )
}

export default Textarea
