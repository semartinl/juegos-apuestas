
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './Routes/Home'
import { LogIn } from './Routes/LogIn'
import { SignUp } from './Routes/SignUp'
import { Header } from './Components/Header'
import { AuthProvider } from './context/AuthProvider'
import './App.css'
import ProtectedRoute from './Routes/ProtectedRoute'
import Buscaminas from './Routes/Games/Buscaminas'
import GameHome from './Routes/Games/GameHome'
import StatusGameProvider from './context/StatusGameProvider'
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
          <Route path='/games' element={<GameHome/>}/>
          <Route path='/games/buscaminas' element={
            <StatusGameProvider>
              <Buscaminas/>
            </StatusGameProvider>
            }/>
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
