import React from "react"; 
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from '../views/app'

export default function RouterView () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </HashRouter>
  )
}