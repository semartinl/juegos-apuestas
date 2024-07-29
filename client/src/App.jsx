
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './Routes/Home'
import { LogIn } from './Routes/LogIn'
import { Header } from './Components/Header'
import './App.css'

function App() {

  
  return (
    <>
      
      <BrowserRouter>
      
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LogIn />}/>
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
