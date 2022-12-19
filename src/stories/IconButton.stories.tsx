import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MagnifyingGlassIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import IconButton from '../components/IconButton'
import { IconButtonType } from '../components/IconButton/IconButton.types'

export default {
  title: 'Form/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'Button click' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: IconButtonType.PRIMARY,
  icon: <PlusIcon className='h-6 w-6' aria-hidden='true' />,
  disabled: false,
  title: 'Example of title',
}

export const Danger = Template.bind({})
Danger.args = {
  type: IconButtonType.DANGER,
  icon: <MinusIcon className='h-6 w-6' aria-hidden='true' />,
  disabled: false,
  title: 'Example of title',
}

export const Accent = Template.bind({})
Accent.args = {
  type: IconButtonType.ACCENT,
  icon: <MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />,
  disabled: false,
  title: 'Example of title',
}

export const Default = Template.bind({})
Default.args = {
  type: IconButtonType.DEFAULT,
  icon: <MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />,
  disabled: false,
  title: 'Example of title',
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: IconButtonType.PRIMARY,
  icon: <MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />,
  disabled: true,
  title: 'Example of title',
}
