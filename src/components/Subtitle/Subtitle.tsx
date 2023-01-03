import { FC } from 'react'
import { SubtitleProps } from './Subtitle.types'

const Subtitle: FC<SubtitleProps> = ({ label, ...props }) => {
  return (
    <h3 className='font-roboto text-2xl font-medium leading-6 text-black' {...props}>
      {label}
    </h3>
  )
}

export default Subtitle
