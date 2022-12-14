import { ComponentStory, ComponentMeta } from '@storybook/react'
import Droplist from '../components/Droplist/Index'

export default {
  title: 'Form/Droplist',
  component: Droplist,
  dropListName: 'Droplist',
  Items: [
    { itemKey: 1, name: 'tes1' },
    { itemKey: 2, name: 'test2' },
    { itemKey: 3, name: 'test3' },
  ],
  error: 'Something went wrong!!!',
  argTypes: {
    onChange: { action: 'Response' },
  },
} as ComponentMeta<typeof Droplist>

const Template: ComponentStory<typeof Droplist> = (args) => <Droplist {...args} />

export const Default = Template.bind({})
Default.args = {
  Items: [
    { itemKey: 1, name: 'test1' },
    { itemKey: 2, name: 'test2' },
  ],
}

export const Error = Template.bind({})
Error.args = {
  error: 'Värdet saknas',
}
