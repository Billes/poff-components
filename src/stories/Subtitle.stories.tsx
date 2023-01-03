import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Subtitle from '../components/Subtitle'

export default {
  title: 'Text/Subtitle',
  component: Subtitle,
  parameters: {
    backgrounds: { disable: true },
  },
} as ComponentMeta<typeof Subtitle>

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'This is a headline',
}
