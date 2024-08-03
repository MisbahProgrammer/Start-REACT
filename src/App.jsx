import React , {useState} from 'react'
import './index.css'

function App() {
  let [counter , setCounter ] = useState(1)

  const addValue = () => {
   
    counter = counter + 1;
    setCounter(counter);
    console.log("clicked" , counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <div className='w-full h-screen bg-slate-400'>
      <h1 className='px-20'>LEARNING REACT</h1>
      <h2 className='mx-16 mt-40 py-10 text-3xl'>Counter value: {counter}</h2>
      <button className='px-5 py-3 bg-green-500 rounded-lg mx-10 ' onClick={addValue}>ADD</button>
      <button className='px-5 py-3 bg-green-500 rounded-lg ' onClick={removeValue}>REMOVE</button>
      
    </div>
  )
}

export default App