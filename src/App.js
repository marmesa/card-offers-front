
import Register from './pages/Register';
import Login from './pages/Login';
import Cards from './pages/Cards';
import ConfirmationScreen from './pages/ConfirmationScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h1>Erro 404 - Página não encontrada</h1>
      <p>A URL acessada não existe.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/:user" element={<Cards />} />
          <Route path="/login/:user/:id" element={<ConfirmationScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

