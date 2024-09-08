import { useState } from 'react'
import Home from './components/Home'
import SalesDaily from './components/sales/SalesDaily'
import SalesWeekly from './components/sales/SalesWeekly'
import SalesMonthly from './components/sales/SalesMonthly'
import Navbar from './components/Navbar'
import Rates from './components/rates/Rates'
import RatesDaily from './components/rates/RatesDaily'
import RatesWeekly from './components/rates/RatesWeekly'
import RatesMonthly from './components/rates/RatesMonthly'
import Sales from './components/sales/Sales'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer'
function App() {

  return (
    <div>
    <Navbar/>
      <Router>
        <nav>
          <ul><Link to='/sales'/></ul>
          <ul><Link to='/sales/daily'/></ul>
          <ul><Link to='/sales/monthly'/></ul>
          <ul><Link to='/sales/weekly'/></ul>
          <ul><Link to='/rates'/></ul>
          <ul><Link to='/rates/daily'/></ul>
          <ul><Link to='/rates/monthly'/></ul>
          <ul><Link to='/rates/weekly'/></ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales/daily" element={<SalesDaily />} />
          <Route path="/sales/weekly" element={<SalesWeekly />} />
          <Route path="/sales/monthly" element={<SalesMonthly />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/rates/daily" element={<RatesDaily />} />
          <Route path="/rates/weekly" element={<RatesWeekly />} />
          <Route path="/rates/monthly" element={<RatesMonthly />} />
          <Route path="/rates" element={<Rates />} />
      </Routes>
      </Router>

      <Footer/>
    </div>
  )
}

export default App
