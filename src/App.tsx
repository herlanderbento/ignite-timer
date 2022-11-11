import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button>Enviar</Button>
      <Button variant="secondary">Enviar</Button>
    </ThemeProvider>
  )
}

export default App
