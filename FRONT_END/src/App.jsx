import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter basename="/mern-crud-app">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/loginn' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
