import { ComponentStory, ComponentMeta } from '@storybook/react'
import ConfirmDialog from '../components/ConfirmDialog'

export default {
  title: 'Overlay/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {
    destroy: { action: 'auto destroyed' },
    open: {
      control: {
        type: 'boolean',
      },
    },
    onConfirm: { action: 'The subject is confirmed' },
    onClose: { action: 'The subject is NOT confirmed' },
  },
} as ComponentMeta<typeof ConfirmDialog>

const Template: ComponentStory<typeof ConfirmDialog> = (args) => {
  return <ConfirmDialog {...args} />
}

export const Default = Template.bind({})
Default.args = {
  open: true,
  title: 'Är du säker?',
  message: 'Om du trycker på OK kommer allt att explodera',
}

export const HtmlMessage = Template.bind({})
HtmlMessage.args = {
  open: true,
  title: 'Är du säker?',
  message: (
    <p>
      This is a paragraph with <b>bold</b> and <i>italic</i> text.
      <br />
      You can even put an image in here if you want.
    </p>
  ),
}

export const AltnativeButtons = Template.bind({})
AltnativeButtons.args = {
  open: true,
  title: 'Är du säker?',
  message: 'Om du trycker på OK kommer allt att explodera',
  cancelLabel: 'Stäng den här',
  confirmLabel: 'Klart jag godkänner',
}
