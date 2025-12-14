import React from 'react'
import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import ThemeToggler from './components/ThemeToggler'
import Navbar from './components/Navbar'
import { ThemeProvider } from './contexts/ThemeContext'

const App = () => {
  return (
    <div className='bg-blue-950 min-h-screen pt-4'>
      <ThemeProvider>
        <Navbar />
        <BasicProps />
        <ChildrenProps />
        <ThemeToggler/>
      </ThemeProvider>
    </div>
  )
}

export default App