import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Alert from '../components/Alert'
import { AlertType } from '../components/Alert/Alert.types'

export default {
  title: 'Elements/Alert',
  component: Alert,
  argTypes: {
    onClick: { action: 'clicked' },
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
  const [show, setShow] = useState(true)

  const resetElement = () => {
    setShow(true)
  }

  const closeElement = () => {
    setShow(false)

    // reset show state for test
    setTimeout(function () {
      resetElement()
    }, 5000)
  }

  return <Alert {...args} show={show} onClick={closeElement} />
}

export const Success = Template.bind({})
Success.args = {
  show: true,
  closable: true,
  type: AlertType.SUCCESS,
  headline: 'Success!',
  body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
  icon: false,
}

export const Info = Template.bind({})
Info.args = {
  show: true,
  closable: true,
  type: AlertType.INFO,
  headline: 'Information',
  body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
}

export const Warning = Template.bind({})
Warning.args = {
  show: true,
  closable: true,
  type: AlertType.WARNING,
  headline: 'Warning!',
  body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
}

export const Error = Template.bind({})
Error.args = {
  show: true,
  closable: true,
  type: AlertType.ERROR,
  headline: 'Error!',
  body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
}

export const OnlyHeadline = Template.bind({})
OnlyHeadline.args = {
  show: true,
  closable: true,
  icon: true,
  type: AlertType.SUCCESS,
  headline: 'You succeeded!',
}
