import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from "./Home"
import Create from './Create'
import Update from './Update'
import Delete from './Delete'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/" element={<Update/>} />
      <Route path="/" element={<Delete/>} />
    </Routes>
  </BrowserRouter>
</>
  )
}

export default App

