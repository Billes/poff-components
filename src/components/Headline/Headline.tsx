import React, { FC } from 'react'
import { HeadlineProps } from './Headline.types'

const Headline: FC<HeadlineProps> = ({ label }) => {
  return <h3 className='font-roboto text-2xl font-black leading-6 text-black'>{label}</h3>
}

export default Headline
