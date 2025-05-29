import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import UpdatePage from './pages/UpdatePage'
import SinglePage from './pages/SinglePage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
         
          <Route path="/create-page" element={<CreatePage />} />
          <Route path="/single-page/:id" element={<SinglePage />} />
          <Route path="/update-page/:id" element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App