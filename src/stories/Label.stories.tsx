import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Label from '../components/Label'

export default {
  title: 'Form/Label',
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'This is a label',
  htmlFor: 'input-label',
}
