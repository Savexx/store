import { createTheme } from '@mui/material'

const mode = false

const theme = createTheme({
  palette: {
    mode: mode ? 'light' : 'dark',
    text: {
      primary: mode ? '#4C525C' : '#FFFFFF',
      secondary: mode ? '#767676' : '#F1F1F1',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
})

export default theme
