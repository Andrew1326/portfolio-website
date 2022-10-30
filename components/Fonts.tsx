import { Global } from '@mantine/core';

export function Fonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Archivo',
            src: `url('../fonts/Archivo/Archivo-Regular.ttf') format("ttf")`,
            fontWeight: 700,
            fontStyle: 'normal',
          }
        }
      ]}
    />
  )
}