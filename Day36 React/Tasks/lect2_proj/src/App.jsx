import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Users from './pages/users'
import TodoPage from './pages/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <TodoPage/>
      {/* <Users/> */}
    </>
  )
}

export default App
