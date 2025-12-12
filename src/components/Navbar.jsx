import React from 'react'

const sections = [
    { id: 'basic', title: 'Basic Props' ,icon:'📦'},
    { id: 'ref', title: 'Ref Props'  ,icon:'🔗' },
    { id: 'children', title: 'Children Props'  ,icon:'👶'},
    { id: 'complex', title: 'Complex Props' ,icon:'🧩' },
    { id: 'theme', title: 'Theme Props'  ,icon:'🎨'}
]

const Navbar = () => {
    return (
      <>
      <div className='flex justify-center my-3'>
          <div>
              {sections.map((section) => (
                  <button key={section.id} className='bg-blue-400 mx-2 font-bold text-white p-1.5 rounded-sm shadow-2xl mb-3 cursor-pointer hover:bg-blue-600'>{ section.title}</button>
              ))}
          </div>
            </div>
            <h1 className='text-center font-bold text-white text-4xl mt-3'>React Props Explained</h1>
            <p className='text-gray-400 text-center text-sm mt-3 mb-4'>
                A comprehensive guide to understanding props in React
            </p>
        </>
  )
}

export default Navbar