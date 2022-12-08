import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Droplist from '../components/Droplist/Index'

export default {
  dropListName: 'Droplist',
  Items: [
    [1, 'tes1'],
    [2, 'test2'],
    [3, 'test3'],
  ],
  error: 'Something went wrong!!!',
  argTypes: {
    onChange: { action: 'Response' },
  },
} as ComponentMeta<typeof Droplist>

const Template: ComponentStory<typeof Droplist> = (args) => <Droplist {...args} />

export const Default = Template.bind({})
Default.args = {}
