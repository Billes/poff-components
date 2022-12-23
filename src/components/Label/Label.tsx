import { FC } from 'react'
import { LabelProps } from './Label.types'

const Label: FC<LabelProps> = ({ text, htmlFor, required = false, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className='block font-roboto text-sm font-normal text-black'
      {...props}
    >
      {text}
      {required && <span>*</span>}
    </label>
  )
}

export default Label
