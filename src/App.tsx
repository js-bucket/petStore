import './App.css'
import Login from './pages/login/Login'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import RequireAuth from './components/RequireAuth'
import { Home } from './pages/home/Home'
import { PetsDashBoard } from './pages/dashboard/PetsDashBoard'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="petsdashboard" element={<PetsDashBoard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
