
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './Routes/Home'
import { LogIn } from './Routes/LogIn'
import { SignUp } from './Routes/SignUp'
import { Header } from './Components/Header'
import { AuthProvider } from './context/AuthProvider'
import './App.css'
import ProtectedRoute from './Routes/ProtectedRoute'

function App() {

  
  return (
    <>
      
      <AuthProvider>
        <BrowserRouter>
      
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />}/>
          <Route path='/games' element={<h1>GAME VIEW</h1>}/>

        <Route element={<ProtectedRoute/>}>
          <Route path='/user' element={<h1>CONFIG USER</h1>}></Route>
        </Route>
      </Routes>
      
      </BrowserRouter>
      </AuthProvider>
      
    </>
  )
}

export default App
