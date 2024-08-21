import React , {useState} from 'react'
import './index.css'

function App() {
  const [color,setColor] = useState('olive');

  return (
    <div className='w-full h-screen ' style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-3'>
          <button className='px-4 outline-none py-1 rounded-lg text-white shadow-lg ' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>
          <button className='px-4 outline-none py-1 rounded-lg text-white shadow-lg ' style={{backgroundColor: 'blue'}} onClick={()=> setColor('blue')}>Blue</button>
          <button className='px-4 outline-none py-1 rounded-lg text-white shadow-lg ' style={{backgroundColor: 'green'}} onClick={()=> setColor('green')}>Green</button>
          <button className='px-4 outline-none py-1 rounded-lg text-white shadow-lg ' style={{backgroundColor: 'grey'}} onClick={()=> setColor('grey')}>Grey</button>
          <button className='px-4 outline-none py-1 rounded-lg text-white shadow-lg ' style={{backgroundColor: 'black'}} onClick={()=> setColor('black')}>Black</button>
          <button className='px-4 outline-none py-1 rounded-lg text-white shadow-lg ' style={{backgroundColor: 'pink'}} onClick={()=> setColor('pink')}>Pink</button>
          <button className='px-4 outline-none py-1 rounded-lg text-white shadow-lg ' style={{backgroundColor: 'yellow'}} onClick={()=> setColor('yellow')}>Yellow</button>
          <button className='px-4 outline-none py-1 rounded-lg text-white shadow-lg ' style={{backgroundColor: 'cyan'}} onClick={()=> setColor('cyan')}>Cyan</button>
        </div>
      </div>


    </div>
    

  )

}

export default App