import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Input from '../components/Input'
import { InputType } from '../components/Input/Input.types'

export default {
  title: 'Form/Input',
  component: Input,
  parameters: {
    backgrounds: { disable: true },
  },
  argTypes: {
    onChange: { action: 'Response' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'standard',
  name: 'InputStandard',
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  id: 'placeholder',
  name: 'InputPlaceholder',
  placeholder: 'Exempel med placeholder',
}

export const Error = Template.bind({})
Error.args = {
  id: 'error',
  name: 'InputError',
  error: 'Värdet saknas',
}

export const Password = Template.bind({})
Password.args = {
  id: 'password',
  name: 'InputPassword',
  placeholder: 'Enter a password',
  type: InputType.PASSWORD,
}

export const Icon = Template.bind({})
Icon.args = {
  id: 'icon',
  name: 'InputIcon',
  placeholder: 'Search...',
  type: InputType.SEARCH,
  icon: <MagnifyingGlassIcon className='h-5 w-5 text-slate-400' aria-hidden='true' />,
}
