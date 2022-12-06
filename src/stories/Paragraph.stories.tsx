import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Paragraph from '../components/Paragraph'

export default {
  title: 'Text/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Deserunt esse qui aute ipsum quis eu enim. Occaecat cillum nulla fugiat amet eiusmod deserunt nisi velit commodo cillum quis. In magna non id sit labore irure ea laboris fugiat mollit pariatur est nisi. Ullamco enim dolore ex minim proident fugiat eu est fugiat ipsum. Culpa anim aliquip anim ad exercitation deserunt fugiat velit incididunt minim. Eiusmod fugiat eiusmod ea dolore laborum veniam amet consequat. Velit do enim quis esse ad laboris sunt sunt.',
}
