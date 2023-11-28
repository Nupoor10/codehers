import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './hooks/useAuthContext'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import StudentHome from './pages/StudentHome/StudentHome'
import TeacherHome from './pages/TeacherHome/TeacherHome'
import AdminHome from './pages/AdminHome/AdminHome'

function App() {

  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/student' element={<StudentHome/>}/>
        <Route path='/teacher' element={<TeacherHome/>}/>
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/home' 
          element={ (user?.userType === 'student') ? <Navigate to = "/student"/>  :
                    (user?.userType === 'teacher') ? <Navigate to = "/teacher"/>  :
                    <Navigate to = "/admin"/>
                  }
        />
      </Routes>
      <Toaster position='top-center'/>
    </Router>
  )
}

export default App
