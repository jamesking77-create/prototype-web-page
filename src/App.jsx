import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import SignUpPage from "./pages/authentication/signUp";
import Dashboard from "./pages/authorization/dashboard";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
