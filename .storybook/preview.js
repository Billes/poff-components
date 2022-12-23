//import '../src/index.css'
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'poff',
    values: [
      { name: 'poff', value: '#e0f2fe' },
      { name: 'light', value: '#ffffff' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}
