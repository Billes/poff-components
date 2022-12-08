import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Textarea from '../components/Textarea' //.. in be begining moves the error to Textarea on row 10

export default {
  title: 'Form/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = () => <Textarea />

export const Default = Template.bind({})
Default.args = {}
