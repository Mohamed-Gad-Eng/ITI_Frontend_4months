
import { useState } from 'react'
import './App.css'
import { ThemeContext } from './contexts/theme.context'
import AppRoutes from './routes'


function App() {

  const [theme, setTheme] = useState('light')

  return (
    <>

      <ThemeContext value={{ theme, setTheme }}>
        {/* <CounterContext value={{counter,setCounter}}> */}
          <div data-bs-theme={theme}>
            <AppRoutes />
          </div>

        {/* </CounterContext> */}

      </ThemeContext>


    </>
  )
}

export default App
