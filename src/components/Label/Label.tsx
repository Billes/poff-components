import { FC } from 'react'
import { LabelProps } from './Label.types'

const Label: FC<LabelProps> = ({ text, htmlFor, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className='block font-roboto text-sm font-normal text-black'
      {...props}
    >
      {text}
    </label>
  )
}

export default Label
