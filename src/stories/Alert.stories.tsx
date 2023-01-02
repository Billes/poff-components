import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Alert from '../components/Alert'
import { AlertType } from '../components/Alert/Alert.types'

export default {
  title: 'Elements/Alert',
  component: Alert,
  parameters: {
    backgrounds: { disable: true },
  },
  argTypes: {
    destroy: { action: 'auto destroyed' },
    show: {
      control: {
        type: 'boolean',
      },
    },
    closable: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => {
  return <Alert {...args} />
}

export const Success = Template.bind({})
Success.args = {
  closable: true,
  type: AlertType.SUCCESS,
  headline: 'Success!',
  body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
  icon: false,
}

export const Info = Template.bind({})
Info.args = {
  closable: true,
  type: AlertType.INFO,
  headline: 'Information',
  body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
}

export const Warning = Template.bind({})
Warning.args = {
  closable: true,
  type: AlertType.WARNING,
  headline: 'Warning!',
  body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
}

export const Error = Template.bind({})
Error.args = {
  closable: true,
  type: AlertType.ERROR,
  headline: 'Error!',
  body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
}

export const OnlyHeadline = Template.bind({})
OnlyHeadline.args = {
  closable: true,
  icon: true,
  type: AlertType.SUCCESS,
  headline: 'You succeeded!',
}

export const SelfDestroying = Template.bind({})
SelfDestroying.args = {
  closable: true,
  type: AlertType.SUCCESS,
  headline: 'Self destroying!',
  body: 'This alert will self destroy after 3 seconds. (set duration in ms)',
  duration: 3000,
}
