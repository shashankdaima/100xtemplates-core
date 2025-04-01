import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/ui/tailwind-config'

const config: Config = {
  ...sharedConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
}

export default config