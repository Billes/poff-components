import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../components/Button'
import { ButtonType } from '../components/Button/Button.types'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'Button click' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: ButtonType.PRIMARY,
  text: 'Save',
  disabled: false,
  extraClassNames: '',
}

export const Danger = Template.bind({})
Danger.args = {
  type: ButtonType.DANGER,
  text: 'Discard',
  disabled: false,
  extraClassNames: '',
}

export const Accent = Template.bind({})
Accent.args = {
  type: ButtonType.ACCENT,
  text: 'Cancel',
  disabled: false,
  extraClassNames: '',
}

export const Default = Template.bind({})
Default.args = {
  type: ButtonType.DEFAULT,
  text: 'Close',
  disabled: false,
  extraClassNames: '',
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: ButtonType.PRIMARY,
  text: 'Save',
  disabled: true,
  extraClassNames: '',
}
