import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Textarea from '../components/Textarea'

export default {
  title: 'Form/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = { placeholder: 'testar med text' }
