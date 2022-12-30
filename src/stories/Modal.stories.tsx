import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from '../components/Modal'
import { Headline, Input, Label } from '../components'

export default {
  title: 'Overlay/Modal',
  component: Modal,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
    onClose: { action: 'Closing the modal' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  return <Modal {...args} />
}

export const Default = Template.bind({})
Default.args = {
  open: true,
  children: (
    <>
      <h3 className='font-roboto text-3xl font-black'>Basic html</h3>
      <p className='font-roboto text-sm text-gray-700'>
        Consequat aliquip tempor proident culpa adipisicing laboris enim adipisicing. Elit enim
        proident eu duis irure consequat mollit eu consectetur labore. Id nulla voluptate velit
        tempor aute Lorem ullamco minim esse. Veniam laboris sit nisi id qui officia incididunt sit.
        Et mollit proident ullamco deserunt amet proident labore nostrud. Incididunt irure dolore
        deserunt do labore mollit fugiat nulla exercitation non sit in nostrud ad.
      </p>
    </>
  ),
}

export const Components = Template.bind({})
Components.args = {
  open: true,
  children: (
    <div className='font-roboto text-sm text-gray-500'>
      <Headline label='Use components' />
      <dl className='mt-2'>
        <div className='grid grid-cols-3 gap-4 py-1'>
          <dt className='mt-2 flex items-start'>
            <Label text='Name' htmlFor='name' />
          </dt>
          <dd className='col-span-2 mt-0 text-sm'>
            <Input id='name' name='name' placeholder='Write your name' value='' />
          </dd>
        </div>
        <div className='grid grid-cols-3 gap-4 py-1'>
          <dt className='mt-2 flex items-start'>
            <Label text='E-mail address' htmlFor='email' />
          </dt>
          <dd className='col-span-2 mt-0 text-sm'>
            <Input id='email' name='email' value='' placeholder='E-mail address' />
          </dd>
        </div>
      </dl>
    </div>
  ),
}
