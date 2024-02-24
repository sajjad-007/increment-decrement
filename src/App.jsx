import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pass from './Pass'


function App() {

  let [count,setCount] = useState(0)      //count = for initial value, setCount= for update initial value, useState() = for render that updated value into virtual DOM
  let [error,setError] = useState("")

  let handleIncrement = ()=> {
    if (count >= 10) {
      setError("You can't use any higher number")
    }else{
      count++
      setCount(count)
      setError("")
    }
  } 
  let handleDecrement = ()=>{
    if (count <= 0) {
      setError("You can't use negative value")
    } else {
      count--
      setCount(count)
      setError("")
    }
  }

  return (
    <>
    <div className='main_app'>
      <h2 className='app_h2'>Increment & Decrement</h2>
      {count >= 10 ?  <button className='hidden' onClick={handleIncrement}>Increment</button> : <button onClick={handleIncrement}>Increment</button>}
      <h3>{count}</h3>
      {count <= 0 ? <button className='hidden' onClick={handleDecrement}>Decrement</button> :<button onClick={handleDecrement}>Decrement</button>}
      <p>{error}</p>
    </div>
    <Pass/>
    </>
  )
}

export default App
