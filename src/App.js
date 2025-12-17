import Register from './pages/Register'
import Login from './pages/Login'
import Cards from './pages/Cards'
import ConfirmationScreen from './pages/ConfirmationScreen'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/:user" element={<Cards />} />
          <Route path="/login/:user/:id" element={<ConfirmationScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

