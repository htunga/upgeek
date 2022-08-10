import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './ui/pages/Page1'
import './App'
import Login1 from './ui/pages/Login1'
import SigninX from './ui/pages/SigninX'
import Dprofile from './ui/pages/Dprofile'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Page1/>}path='/'/>
        <Route element={ <Login1/>} path='/Login' />
        <Route element={ <SigninX/>} path='/SigninX' />
        <Route element={ <Dprofile/>} path='/Dprofile' />
      </Routes>
    </BrowserRouter>

  )
}

export default App