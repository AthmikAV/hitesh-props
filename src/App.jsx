import React from 'react'
import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import RefProps from './components/RefProps'
import ThemeToggler from './components/ThemeToggler'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-blue-950 min-h-screen pt-4'>
      <Navbar />
      <BasicProps />
      <ChildrenProps/>
    </div>
  )
}

export default App