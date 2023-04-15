import './App.css'
import FirstPage from './Pages/FirstPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import LoggedIn from './Pages/LoggedIn'
import { AuthContextProvider } from './context/AuthContext'

function App () {
  return (
    <AuthContextProvider>
      <div className='all'>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/LoggedIn' element={<LoggedIn />} />
        </Routes>
      </div>
    </AuthContextProvider>
  )
}

export default App
