import React, { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'

function Home() {
  const { counter, changeCounter } = useContext(counterContextObj)

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl mb-5">Counter: {counter}</h1>

      <button
        onClick={changeCounter}
        className=" text-white p-3 rounded-lg bg-yellow-400"
      >
        Change
      </button>
    </div>
  )
}

export default Home