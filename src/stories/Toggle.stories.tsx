import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Toggle from '../components/Toggle'

export default {
  title: 'Form/Toggle',
  component: Toggle,
  parameters: {
    backgrounds: { disable: true },
  },
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [enabled, toggleEnabled] = useState(false)

  const toggleElement = () => {
    toggleEnabled(!enabled)
  }

  return <Toggle {...args} enabled={enabled} onClick={toggleElement} />
}

export const Default = Template.bind({})
Default.args = {
  enabled: false,
  disabled: false,
  label: 'Toggle Switch',
  description: 'A small description',
}
