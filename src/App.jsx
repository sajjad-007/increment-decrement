import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  let [count,setCount] = useState(0)
  let incre = ()=> {
    count++
    setCount(count)
  } 
  let decre = ()=>{
    count--
    setCount(count)
  }

  return (
    <div className='main_app'>
      <button onClick={incre}>Increment</button>
      <h3>{count}</h3>
      <button onClick={decre}>Decrement</button>
    </div>
  )
}

export default App
