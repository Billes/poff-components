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

export const Disable = Template.bind({})
Disable.args = { disabled: true, placeholder: 'testar med text' }

export const Rows = Template.bind({})
Rows.args = { rows: 10, placeholder: 'testar med text' }
