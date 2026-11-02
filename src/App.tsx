import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { ThemeProvider } from '@/context/ThemeContext'
import './App.css'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}
