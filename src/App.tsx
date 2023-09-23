
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Contact from './pages/contact/Contact'
import Register from './pages/register/Register'
import MainLayout from './components/layout/MainLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path ='/contact' element={<Contact />} />
          <Route path ='/register' element={<Register />} />
          <Route path ='/overview' element={<Homepage />} />
      </Route>

      <Route path ='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
