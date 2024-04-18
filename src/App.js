import React from 'react'
import Input from './components/Input'
import List from './components/List'

const App = () => {
  return (
    <>
    <div className='py-20 flex flex-col gap-5 justify-center items-center h-full bg-yellow-100'>
      <Input />
    </div>
    <div className='container mx-auto py-8'>
      <List />
    </div>
    </>
  )
}

export default App