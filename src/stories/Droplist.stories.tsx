import { ComponentStory, ComponentMeta } from '@storybook/react'
import Droplist from '../components/Droplist/Index'

export default {
  title: 'Form/Droplist',
  component: Droplist,
  dropListName: '',
  Items: [],
  error: '',
  argTypes: {
    onChange: { action: 'Response' },
  },
} as ComponentMeta<typeof Droplist>

const Template: ComponentStory<typeof Droplist> = (args) => <Droplist {...args} />

export const Default = Template.bind({})
Default.args = {
  Items: [
    { itemKey: 1, name: 'One' },
    { itemKey: 2, name: 'Two' },
    { itemKey: 3, name: 'Three' },
    { itemKey: 4, name: 'four' },
    { itemKey: 5, name: 'five' },
    { itemKey: 6, name: 'six' },
  ],
}
