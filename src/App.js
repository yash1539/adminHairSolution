import React from 'react'
import Footer from './components/footer'
import SideDrawer from './components/SideDrawer'
import "./App.css"
import Logo from './components/logo'
function App() {
  return (
    <div>
      <div className='login-wrap'>
        <Logo />
      </div>
      <SideDrawer />
      <Footer />
    </div>
  )
}

export default App