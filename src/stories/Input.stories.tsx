import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '../components/Input'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'Response' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: 'Exempel med placeholder',
}

export const Error = Template.bind({})
Error.args = {
  error: 'Värdet saknas',
}
