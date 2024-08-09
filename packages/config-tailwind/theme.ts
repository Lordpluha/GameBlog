import { NextUIPluginConfig } from '@nextui-org/react'

const theme: NextUIPluginConfig = {
  addCommonColors: true,
  layout: {
    dividerWeight: '1px', // h-divider the default height applied to the divider component
    disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
    fontSize: {
      tiny: '0.75rem', // text-tiny
      small: '0.875rem', // text-small
      medium: '1rem', // text-medium
      large: '1.125rem' // text-large
    },
    lineHeight: {
      tiny: '1rem', // text-tiny
      small: '1.25rem', // text-small
      medium: '1.5rem', // text-medium
      large: '1.75rem' // text-large
    },
    radius: {
      small: '5px', // радиус закругления для мелких элементов
      medium: '10px', // радиус закругления для средних элементов
      large: '16px' // радиус закругления для крупных элементов
    },
    borderWidth: {
      small: '1px', // border-small
      medium: '2px', // border-medium (default)
      large: '3px' // border-large
    },
    boxShadow: {
      small: '0px 4px 6px rgba(0, 0, 0, 0.1)', // тени для мелких элементов
      medium: '0px 6px 12px rgba(0, 0, 0, 0.15)', // тени для средних элементов
      large: '0px 8px 24px rgba(0, 0, 0, 0.2)' // тени для крупных элементов
    }
  },
  themes: {
    light: {
      colors: {
        background: '#DEDFE1',
        foreground: '#161B1D',
        focus: '#E30613',
				content1: '#ffffff'
      }
    },
    dark: {
      colors: {
        background: '#161B1D',
        foreground: '#ffffff',
        focus: '#E30613',
        content1: '#262A2C'
      }
    }
  }
}

export default theme
