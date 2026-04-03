import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/contextProvider'
function EditCounter2() {
     
      const { counter,increment,decrement } = useContext(counterContextObj)
  
    return (
      <div className="text-center mt-10 text-4xl">
          <h1>EditCounter1</h1>
           <div className='rounded border shadow-2xl  bg-amber-100'>
        <h1 className="text-3xl mb-5">{counter}</h1>
  
        <button
          onClick={increment}
          className=" text-white p-3 rounded-lg bg-blue-400"
        >
          +
        </button>
        <button
          onClick={decrement}
          className=" text-white p-3 rounded-lg bg-red-400 mx-5"
        >
          -
        </button>
       </div>
      </div>
    )
  }
export default EditCounter2