import React from 'react'
import List from './Components/List'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/list" element={ <List/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App