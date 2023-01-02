import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectMenu from '../components/SelectMenu'

export default {
  title: 'Form/SelectMenu',
  component: SelectMenu,
  parameters: {
    backgrounds: { disable: true },
  },
  argTypes: {
    setSelected: { action: 'selected' },
  },
} as ComponentMeta<typeof SelectMenu>

const Template: ComponentStory<typeof SelectMenu> = (args) => <SelectMenu {...args} />

const people = [
  {
    id: '1',
    name: 'Durward Reynolds',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '2',
    name: 'Kenton Towne',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '3',
    name: 'Therese Wunsch',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '4',
    name: 'Benedict Kessler',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '5',
    name: 'Katelyn Rohan',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
]

export const Default = Template.bind({})
Default.args = {
  name: 'people',
  options: people,
  selected: null,
  keyIdentifier: 'id',
  valueIdentifier: 'name',
  disabled: false,
}

export const Selected = Template.bind({})
Selected.args = {
  name: 'people',
  options: people,
  selected: people[2],
  keyIdentifier: 'id',
  valueIdentifier: 'name',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'people',
  options: people,
  selected: null,
  keyIdentifier: 'id',
  valueIdentifier: 'name',
  disabled: true,
}

export const Empty = Template.bind({})
Empty.args = {
  name: 'people',
  options: [],
  selected: null,
  keyIdentifier: 'id',
  valueIdentifier: 'name',
  disabled: false,
}
