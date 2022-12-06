import React, { FC } from 'react'
import { ParagraphProps } from './Paragraph.types'

const Paragraph: FC<ParagraphProps> = ({ text }) => {
  return <p className='mb-2 font-roboto text-sm font-medium'>{text}</p>
}

export default Paragraph
