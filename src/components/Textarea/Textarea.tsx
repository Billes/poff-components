import { useState } from '@storybook/addons' //Or should it import form react like before?
import React from 'react'
import { TextareaProps } from './Textarea.types'

const Textarea: React.FC<TextareaProps> = ({ placeholder, value }) => {
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLAreaElement>) => {
    setText(e.target.value)
  }
  return (
    <div>
      <Textarea className='font-roboto text-2xl font-black leading-6 text-black'>
        placeholder='text exempel' onChange={handleChange}
      </Textarea>
    </div>
  )
}

//   return React.createElement('textarea', {
//     placeholder,
//     value: text,
//     onChange: handleChange,
//   })
// }
// <Textarea placeholder='text exempel' onChange={handleChange} />

export default Textarea

// const Textarea = () => {
//   return <div>textarea</div>
// }

// const Textarea: React.FC<TextareaProps> = ({ placeholder }) => {
//   return React.createElement('textarea', { placeholder }) //was textarea with small t first
// }
