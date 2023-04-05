import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    //UseEffect is basically like react Lifecycle hooks
   const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
    if(count < 0){
      return <p>Count is less than 0</p>
    }
  return (
    <div>
      {count}<br/>
        <button style={{padding:'8px',
      marginTop:'10px',
      textAlign:'center',
      marginBottom:'10px',
      width:'100px',
      background:'green',
      fontFamily:'sans-serif',
      border:'none',
      color:'white' ,
      fontSize:'12px',
      cursor:'pointer'
      }}
        onClick={()=>setCount(count+1)}>Increment</button>
       <br/>
       <button
        onClick={()=>setCount(count-1)}>Decrement</button>
        
    </div>
  )
}

export default UseEffectHook
