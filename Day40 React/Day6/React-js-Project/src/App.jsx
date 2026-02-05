
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContext } from './contexts/theme.context'
import AppRoutes from './routes'


function App() {

  const [theme, setTheme] = useState('light')
  useEffect(()=>{
    document.documentElement.dir =localStorage.getItem('lang')=='en'?'ltr':'rtl'
  },[])
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
