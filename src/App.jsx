import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen.jsx'
import FacilityScreen from './screens/FacilityScreen.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <Router>
            <Header />
            <div className='screen'>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/facility/:id' element={<FacilityScreen />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
