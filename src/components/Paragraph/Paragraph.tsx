import React, { FC } from 'react'
import { ParagraphProps } from './Paragraph.types'

const Paragraph: FC<ParagraphProps> = ({ children, ...props }) => (
  <div className='mb-2 space-y-2 font-roboto text-sm font-medium' {...props}>
    {children}
  </div>
)

export default Paragraph
