import React, { useState } from 'react'

const Pass = () => {
    let [show,setShow] = useState(true)
    
    let HandlePassShow= ()=>{
      setShow(!show)
    }
  return (
    <div className='main_pass'>
      <h2 className='pass_h2'>Password show & hide</h2>
      <input type={show ? "password" : "text"} placeholder='Type here'/>
      <button onClick={HandlePassShow}>{show ? "show" : "hide"}</button>
    </div>
  )
}

export default Pass