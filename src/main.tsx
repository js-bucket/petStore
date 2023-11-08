import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/Auth/AuthContext.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PetsProvider } from './context/Pets/PetsContext.tsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PetsProvider>
        <Routes>
          <Route path="/*" element={<App/>}></Route>
        </Routes>
        </PetsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
