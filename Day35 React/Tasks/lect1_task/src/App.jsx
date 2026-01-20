import './App.css'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='layout'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </>
  )
}

export default App
