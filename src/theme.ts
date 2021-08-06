import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#663399',
    },
    secondary: {
      main: '#43454D',
    },
    success: {
      main: '#5DAE49'
    },
    info: {
      main: '#3981F7'
    },
    warning: {
      main: '#FFC620'
    },
    error: {
      main: red.A400,
    }
  },
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif'
    ].join(',')
  }
})

export default theme
