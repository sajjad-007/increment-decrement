import React, { useState } from 'react'

const Pass = () => {
    let [show,setShow] = useState(true)
    
    let handleClick = ()=>{
       setShow(!show)
    }

  return (
    <div className='main_pass'>
        <input type={show ? "password" : "text"}/>
        <button onClick={handleClick}>show</button>
    </div>
  )
}

export default Pass