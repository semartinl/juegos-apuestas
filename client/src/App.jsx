
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './Routes/Home'
import { LogIn } from './Routes/LogIn'
import { SignUp } from './Routes/SignUp'
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
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
