import React from 'react'
import EditCounter1 from './components/EditCounter1'
import EditCounter2 from './components/EditCounter2'
import EditCounter3 from './components/EditCounter3'
import EditCounter4 from './components/EditCounter4'

function App() {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-20 items-center justify-between gap-7'>
      <EditCounter1/>
      <EditCounter2/>
      <EditCounter3/>
      <EditCounter4/>
    </div>
  )
}

export default App