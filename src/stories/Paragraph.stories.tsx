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
  children: (
    <p>
      Consequat aliquip tempor proident culpa adipisicing laboris enim adipisicing. Elit enim
      proident eu duis irure consequat mollit eu consectetur labore. Id nulla voluptate velit tempor
      aute Lorem ullamco minim esse. Veniam laboris sit nisi id qui officia incididunt sit. Et
      mollit proident ullamco deserunt amet proident labore nostrud. Incididunt irure dolore
      deserunt do labore mollit fugiat nulla exercitation non sit in nostrud ad.
    </p>
  ),
}

export const MultipleParagraphs = Template.bind({})
MultipleParagraphs.args = {
  children: (
    <>
      <p>
        Consequat aliquip tempor proident culpa adipisicing laboris enim adipisicing. Elit enim
        proident eu duis irure consequat mollit eu consectetur labore. Id nulla voluptate velit
        tempor aute Lorem ullamco minim esse. Veniam laboris sit nisi id qui officia incididunt sit.
        Et mollit proident ullamco deserunt amet proident labore nostrud. Incididunt irure dolore
        deserunt do labore mollit fugiat nulla exercitation non sit in nostrud ad.
      </p>
      <p>
        Consequat aliquip tempor proident culpa adipisicing laboris enim adipisicing. Elit enim
        proident eu duis irure consequat mollit eu consectetur labore. Id nulla voluptate velit
        tempor aute Lorem ullamco minim esse. Veniam laboris sit nisi id qui officia incididunt sit.
        Et mollit proident ullamco deserunt amet proident labore nostrud. Incididunt irure dolore
        deserunt do labore mollit fugiat nulla exercitation non sit in nostrud ad.
      </p>
    </>
  ),
}
