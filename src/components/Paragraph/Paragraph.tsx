import React, { FC } from 'react'
import { ParagraphProps } from './Paragraph.types'

const Paragraph: FC<ParagraphProps> = ({ children }) => (
  <div className='mb-2 space-y-2 font-roboto text-sm font-medium'>{children}</div>
)

export default Paragraph
